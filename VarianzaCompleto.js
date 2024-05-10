let array = [11, 5, 2, -9, 7];

function formulaVarianza(array) {
  let promedio;
  let newArr = [];
  let sumArrAll = array.reduce((total, current) => {
    return total + current;
  });
  promedio = sumArrAll / array.length;
  for (let i = 0; i < array.length; i++) {
    newArr.push(Math.pow(array[i] - promedio, 2));
  }
  let sumAll = newArr.reduce((total, current) => {
    return total + current;
  });
  let one = sumAll.toFixed(1) / array.length;

  return one.toFixed(2);
}

console.log(formulaVarianza(array));
