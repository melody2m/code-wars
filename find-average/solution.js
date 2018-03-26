function find_average(array) {
  let sum = array.reduce((acc, current) => acc + current);
  return sum/array.length;
}