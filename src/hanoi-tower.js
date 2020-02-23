module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let t = Math.pow(2,disksNumber)-1;
    let s = t/(turnsSpeed/3600);
    return {turns: t, seconds: s}
}