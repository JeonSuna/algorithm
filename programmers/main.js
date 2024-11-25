//인덱스를 찾아야함

function solution(s, skip, index) {
  var answer = '';
  const alp = 'abcdefghijklmnopqrstuvwxyz';

  const skipA = [...skip]; //건너뛸 문자열
  //   console.log(skipA);
  //   console.log(...alp);
  let skipAlp = [...alp].filter((elem) => {
    return !skipA.includes(elem);
  });
  console.log(skipAlp); //=> skip뺀 alp배열

  //   console.log([...s]);

  for (const item of s) {
    console.log(item);

    console.log(skipAlp.indexOf(item));
    let nowItem = skipAlp.indexOf(item); //skip 뺀 알파벳 배열에서의 인덱스값
    if (nowItem === -1) continue; //=>없으면 건너뛰기
    let newItem = (nowItem + index) % skipAlp.length;
    console.log(newItem);
    // 조건 => index만큼 뒤의 알파벳이z를 넘어갈 경우 다시 a로 돌아간다)
    // while (newItem >= skipAlp.length) {
    //   newItem = newItem - skipAlp.length;
    // }
    answer += skipAlp[newItem];
    // console.log(nowItem); //인덱스
  }

  return answer;
}

solution('aukks', 'wbqd', 5);
