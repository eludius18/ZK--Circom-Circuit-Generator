import { execSync } from 'child_process';
import * as fs from 'fs';

function runCommand(command: string) {
  try {
    const output = execSync(command);
    console.log(output.toString());
  } catch (error: unknown) {
    console.error((error as Error).message);
  }
}

function executeCircuit() {
  runCommand('circom circuit.circom --r1cs --wasm --sym');
  runCommand('snarkjs r1cs export json circuit.r1cs circuit.r1cs.json');
  runCommand('cd circuit_js && node generate_witness.js circuit.wasm ../input.json ../witness.wtns');
  runCommand('cd ../');
  runCommand('snarkjs plonk setup circuit.r1cs pot12_final.ptau circuit_final.zkey');
  runCommand('snarkjs zkey export verificationkey circuit_final.zkey verification_key.json');
  runCommand('snarkjs plonk prove circuit_final.zkey witness.wtns proof.json public.json');
  runCommand('snarkjs plonk verify verification_key.json public.json proof.json');
  runCommand('snarkjs zkey export solidityverifier circuit_final.zkey verifier.sol');
  runCommand('snarkjs zkey export soliditycalldata public.json proof.json');
  runCommand('snarkjs generatecall public.json proof.json > proofToUpload.json');

  // Leer el contenido de proofToUpload.json como una cadena de texto
  const proofData = fs.readFileSync('./proofToUpload.json', 'utf8');

  // Extraer el contenido completo de array1 y array2
  const array1StartIndex = proofData.indexOf('[');
  const array1EndIndex = proofData.indexOf(']', array1StartIndex) + 1;
  const array2StartIndex = proofData.indexOf('[', array1EndIndex);
  const array2EndIndex = proofData.lastIndexOf(']');

  const array1 = proofData.substring(array1StartIndex, array1EndIndex).trim();
  const array2 = proofData.substring(array2StartIndex, array2EndIndex + 1).trim();

  console.log('array1:', array1);
  console.log('array2:', array2);
}

executeCircuit();