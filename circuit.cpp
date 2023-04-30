#include "circom.hpp"
#include "calcwit.hpp"
#define NSignals 4
#define NComponents 1
#define NOutputs 1
#define NInputs 2
#define NVars 4
#define NPublic 3
#define __P__ "21888242871839275222246405745257275088548364400416034343698204186575808495617"

/*
Multiplier
n=1000
*/
void Multiplier_e56df795f320fbb8(Circom_CalcWit *ctx, int __cIdx) {
    FrElement _sigValue[1];
    FrElement _sigValue_1[1];
    FrElement _tmp[1];
    FrElement _tmp_1[1];
    int _a_sigIdx_;
    int _b_sigIdx_;
    int _d_sigIdx_;
    _a_sigIdx_ = ctx->getSignalOffset(__cIdx, 0xaf63dc4c8601ec8cLL /* a */);
    _b_sigIdx_ = ctx->getSignalOffset(__cIdx, 0xaf63df4c8601f1a5LL /* b */);
    _d_sigIdx_ = ctx->getSignalOffset(__cIdx, 0xaf63d94c8601e773LL /* d */);
    /* signal input a */
    /* signal input b */
    /* signal output d */
    /* d <== a*b*n */
    ctx->multiGetSignal(__cIdx, __cIdx, _a_sigIdx_, _sigValue, 1);
    ctx->multiGetSignal(__cIdx, __cIdx, _b_sigIdx_, _sigValue_1, 1);
    Fr_mul(_tmp, _sigValue, _sigValue_1);
    Fr_mul(_tmp_1, _tmp, (ctx->circuit->constants + 2));
    ctx->setSignal(__cIdx, __cIdx, _d_sigIdx_, _tmp_1);
    ctx->finished(__cIdx);
}
// Function Table
Circom_ComponentFunction _functionTable[1] = {
     Multiplier_e56df795f320fbb8
};
