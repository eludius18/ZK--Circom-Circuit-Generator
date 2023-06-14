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

```shell
ts-node executor.ts
```

## Format proof and inputs for verifier.sol

Formats the outputs for ```proof``` and ```pubSignals``` from:

    snarkjs zkey export soliditycalldata public.json proof.json

```proof``` and ```pubSignals``` are inputs for verifier.sol to test if the proof being correct is true or false:

https://lingojam.com/TexttoOneLine

## Check the verification key to see if it is valid for the proof

```shell
snarkjs zkey verify circuit.r1cs pot12_final.ptau circuit_final.zkey
```

## Check if the proof, the public value, and the verification, and prove are valid

```shell
snarkjs groth16 verify verification_key.json public.json proof.json
```

## Reference:

https://github.com/iden3/snarkjs
