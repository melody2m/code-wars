function mutateMyStrings(stringOne, stringTwo){
 let string1s = stringOne.split('');
 let string2s = stringTwo.split('');
 const solution = [];
 
 solution.push(string1s.join('') + '\n');
 
 for (let i=0;i<string1s.length;i++){
   if (string1s[i] !== string2s[i]){
    string1s.splice(i, 1, string2s[i]);
    solution.push(string1s.join('') + '\n');
   }
 }
 
 return solution.join('');
}