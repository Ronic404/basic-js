module.exports = function createDreamTeam(members) {    
  let strMembers = [];
  let arrNames = [];
  let coolName = [];

  if(!Array.isArray(members)) return false;

  for(let i of members) {
    if(typeof i === 'string') strMembers.push(i);
  }

  for(let i of strMembers) {    
    let memberName = i.toUpperCase().split(' ').join('');    
    arrNames.push(memberName);
  }

  let sortTeam = arrNames.sort();

  for (let i of sortTeam) {
    coolName.push(i[0]);
  }  

  return coolName.join('');  
};