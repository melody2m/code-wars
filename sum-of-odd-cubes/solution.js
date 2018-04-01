function cubeOdd(arr) {
  for (let i =0; i<arr.length;i++){
    if (Number.isInteger(arr[i]) === false){
      return undefined;
      }
  }
  
  let newArr = arr.map(x => x*x*x)
  .filter(x => Math.abs(x%2) === 1).reduce((acc, curr) => acc + curr);
  
return newArr;
}