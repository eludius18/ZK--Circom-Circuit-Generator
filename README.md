# Circom_snarkjs

## zkSnark and Public Input Signal(s)

    circuit.circom

## Output Signal(s)

    proof.json

## Secret Input Signal(s)

    input.json

## Ceremony before a circuit

# Using Circom

1. Install Circom and snarksjs

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
npm install -g snarkjs
```

2. Download Circom Repo

```shell
git clone https://github.com/iden3/circom.git
```

3. Download Circom Repo

```shell
cd circom
cargo build --release
cargo install --path circom
```


## Generate verifier.sol along with proof and inputs

After setting up a ceremony before a circuit, run the following to generate contract and proof in directory console:

    bash generateProofAndSignals.sh

You can also manually copy and paste the commands all at once into your terminal:

    circom circuit.circom --r1cs --wasm --sym
    snarkjs r1cs export json circuit.r1cs circuit.r1cs.json
    cd circuit_js
    node generate_witness.js circuit.wasm ../input.json ../witness.wtns
    cd ../
    snarkjs plonk setup circuit.r1cs pot12_final.ptau circuit_final.zkey
    snarkjs zkey verify circuit.r1cs pot12_final.ptau circuit_final.zkey
    snarkjs zkey export verificationkey circuit_final.zkey verification_key.json
    snarkjs plonk prove circuit_final.zkey witness.wtns proof.json public.json
    snarkjs plonk verify verification_key.json public.json proof.json
    snarkjs zkey export solidityverifier circuit_final.zkey verifier.sol
    snarkjs zkey export soliditycalldata public.json proof.json

Note: the output proof can change for the same zkSnark and Solidity smart contract.

## Format proof and inputs for verifier.sol

Formats the outputs for ```proof``` and ```pubSignals``` from:

    snarkjs zkey export soliditycalldata public.json proof.json

```proof``` and ```pubSignals``` are inputs for verifier.sol to test if the proof being correct is true or false:

https://lingojam.com/TexttoOneLine

## Reference:

https://github.com/iden3/snarkjs
