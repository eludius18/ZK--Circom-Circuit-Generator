template Multiplier(n) { //PUBLIC INPUT ARG
    signal input a; //PRIVATE INPUT
    signal input b; //PRIVATE INPUT
    signal input c; //PRIVATE INPUT
    signal output d; //PUBLIC OUTPUT

    d <== a*b*d*n; //OUTPUT PROOF
}

component main = Multiplier(1000); //PUBLIC INPUT FROM MAIN FUNCTION CALL
