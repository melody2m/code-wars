function abbrevName(name){
  let array1 = name.split(" ");
  let array2 = [];
  array2.push(array1[0][0]);
  array2.push(array1[1][0]);
  return array2.join(".").toUpperCase();
}