module.exports = function getSeason(date) {  
  let season = '';
  if(date === undefined) return "Unable to determine the time of year!";
  if({}.toString.call(date) != '[object Date]') throw new Error;

  const month = date.getMonth();    
  (month <= 1 || month === 11) ? season = 'winter' :
  (month >= 2 && month <= 4) ? season = 'spring' :
  (month >= 5 && month <= 7) ? season = 'summer' :
  (month >= 8 && month <= 10) ? season = 'autumn' : season = 'Error';

  return season;
};