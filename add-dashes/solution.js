function insertDash(num) {
    let string = num.toString();
    let solution = '';
    for (let i =0; i<string.length; i++){
      if (string.charAt(i)%2 && string.charAt(i+1)%2){
      solution+= `${string.charAt(i)}-`;
      }else{solution+=string.charAt(i)}
    }
    return solution;
  }
 