function solution(wallpaper) {
  var answer = [];
  const Xvalue = [];
  const Yvalue = [];
  wallpaper.forEach((value, index) => {
    if (value.includes('#')) {
      console.log(value);
      let maxYIndex = value.lastIndexOf('#') + 1;
      let minYIndex = value.indexOf('#');
      let maxXIndex = index;
      let minXIndex = index + 1;
      Xvalue.push(maxXIndex, minXIndex);
      Yvalue.push(maxYIndex, minYIndex);
    }
  });
  const minX = Math.min(...Xvalue);
  answer.push(minX);
  const minY = Math.min(...Yvalue);
  answer.push(minY);
  const maxX = Math.max(...Xvalue);
  answer.push(maxX);
  const maxY = Math.max(...Yvalue);
  answer.push(maxY);
  //   console.log(answer);
  return answer;
}
solution([
  '..........',
  '.....#....',
  '......##..',
  '...##.....',
  '....#.....',
]);
