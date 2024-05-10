let array = [11, 5, 2, -9, 7];

function uPromedio(array) {
  let sumArrAll = array.reduce((total, current) => {
    return total + current;
  });
  return sumArrAll / array.length;
}

let promedio = uPromedio(array);

function calculoVarianza(array, promedio) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(Math.pow(array[i] - promedio, 2));
  }
  console.log(newArr);
  let sumAll = newArr.reduce((total, current) => {
    return total + current;
  });
  let formula = sumAll.toFixed(1) / array.length;
  return formula.toFixed(2);
}

console.log(calculoVarianza(array, promedio));
