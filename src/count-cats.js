module.exports = function countCats(matrix) {
  let cats = 0;
  for (let arrs=0; arrs<matrix.length; arrs++) {
    for (let i of matrix[arrs]) {
      if (i==='^^') cats++;
    }
  }
  return cats;
};