// function solution(n, m, section) {
//   var answer = 0;
//   let first = section.at(0); // 처음 칠한 부분
//   const last = section.at(-1); //마지막 칠해야하는 부분

//   //section-index
//   section.forEach((item) => {
//     if (first <= last) {
//       answer += 1;
//       first = first + m - 1; //칠한 후 자리 옮기기
//     } else if (first > last) {
//       return;
//     }
//     console.log(answer);
//   });
//   return answer;
// }

// solution(5, 4, [1, 3]);

function solution(n, m, section) {
  var answer = 0;
  let first = section.at(0); // 처음 칠한 부분

  //section-index
  section.forEach((item) => {
    if (item >= first) {
      answer += 1;
      first = item + m; //칠한 후 자리 옮기기
    }
    console.log(answer);
  });
  return answer;
}

solution(5, 4, [1, 3]);
