function formatWords(words){
  if (words === null){
  return '';
  }
  let words2 = words.filter(el => el !== '');
  let solution = '';
  if (words2.length === 1){
    solution += words2[0];
  }
  else {
    for(let i=0;i<words2.length;i++){
        if (i === (words2.length -1)){
          solution += ' and ' + words2[i];
        }
        else if (i === (words2.length -2)){
          solution += words2[i];
        }
        else {
          solution += words2[i] + ', ';
        }
      }
  }
  return solution;   
}