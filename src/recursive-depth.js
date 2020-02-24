module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        }else {
            return 1 + arr.reduce((a, c) => Math.max(this.calculateDepth(c), a), 0);;
        }
    }
};