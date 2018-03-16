function capitalize(s){
  let final = [];
  let sol1 = '';
  let sol2 = '';
  
  for (let i=0;i<s.length;i++){
    
    if (!(i %2)) {
      sol1 += s[i].toUpperCase();
      sol2 += s[i].toLowerCase();
    }
    if (i %2) {
      sol2 += s[i].toUpperCase();
      sol1 += s[i].toLowerCase();
    }
    
    
  }
  
  final.push(sol1, sol2);

  return final;
}