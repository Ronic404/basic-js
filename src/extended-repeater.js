module.exports = function repeater(str, options) {
    let arrResult = [];    
    let addArray = []; 
    let addString = '';      
    if(options.addition === false) options.addition = 'false';
    if(options.addition === null) options.addition = 'null';

    if(options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1; // additionRepeatTimes
    for(let i = 0; i < options.additionRepeatTimes; i++) { 
        addArray.push(options.addition);
    }
    
    if(options.additionRepeatTimes && options.additionSeparator) { // additionSeparator
        addString = addArray.join(options.additionSeparator); 
    }     
        
    if(options.additionSeparator) { // addition
        str += addString;
    } else if(options.addition)  {
        str += options.addition;
    } 

    if(options.repeatTimes === undefined) options.repeatTimes = 1; // repeatTimes
    for(let i = 0; i < options.repeatTimes; i++) { 
        arrResult.push(str);
    }

    if(options.separator === undefined) options.separator = '+'; // separator
    return arrResult.join(options.separator);
};