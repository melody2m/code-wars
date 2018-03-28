function high(sentence){
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const wordsums = [];
  const nonsort = [];
  
  const words = sentence.split(' ');
  
  for(let i=0;i<words.length;i++){
    if (words[i] === ''){
      return '';
    }
  }
  
  for (let i=0; i<words.length; i++){
    let wordletters = words[i].split('');
    let wordnumbers = [];
    let index = wordletters.map(letter => letters.indexOf(letter) + 1);
    let sum = index.reduce((a, b) => a + b);
    wordsums.push(sum);
    nonsort.push(sum)
  }
  wordsums.sort((a, b) => b - a);
  let indexhigh = nonsort.indexOf(wordsums[0]);
  return words[indexhigh];
}