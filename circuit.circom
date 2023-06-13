pragma circom 2.0.0;

template TransactionVolume() {
    signal input a;
    signal input b;
    signal output result;

    result <== b - a;
}

component main = TransactionVolume();