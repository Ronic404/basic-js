module.exports = function countCats(arr) {
  let cats = 0;
  for (let arrs=0; arrs<arr.length; arrs++) {
    for (let i of arr[arrs]) {
      if (i==='^^') cats++;
    }
  }
  return cats;
};