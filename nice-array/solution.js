function isNice(arr){
    if (arr.length === 0){
      return false;
    }
    for (let i=0;i<arr.length;i++) {
       let val1 = arr[i]+1;
       let val2 = arr[i]-1;
      if (arr.indexOf(val1) === -1 && arr.indexOf(val2) === -1) {
        return false;
      }
    }
    return true;
}