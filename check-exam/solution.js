function checkExam(array1, array2) {
 // good luck
 var score = 0;
 
 for (var i =0; i < array1.length; i++){
   if(array2[i] === array1[i]){
   score += 4;}
   
   if (array2[i] !== array1[i]){
     if (array2[i] === ""){
     score +=0;}
     else{
     score -= 1;}
    }
  }
  
  if (score < 0){
  score = 0;}
  
  return score;
}