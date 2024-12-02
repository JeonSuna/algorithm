const name = ['may', 'kein', 'kain', 'radi'];
const yearning = [5, 10, 1, 3];

const photo = [
  ['may', 'kein', 'kain', 'radi'],
  ['may', 'kein', 'brin', 'deny'],
  ['kon', 'kain', 'may', 'coni'],
];

function solution(name, yearning, photo) {
  const nameObj = new Map();

  for (let i = 0; i < name.length; i++) {
    nameObj.set(name[i], yearning[i]);
    console.log(nameObj);
  }
  var answer = [];

  console.log(photo.length);
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    // console.log(photo[i]);
    for (let k = 0; k < photo[i].length; k++) {
      const person = photo[i][k];
      if (nameObj.has(person)) {
        sum += nameObj.get(person);
      }
    }
    answer.push(sum);
  }
  return answer;
}

console.log(solution(name, yearning, photo));
