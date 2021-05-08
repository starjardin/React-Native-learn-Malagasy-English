//Generate unique random number
export function randomUniqueNum(range, outputCount) {
  let arr = [];
  let result = [];

  for (let i = 1; i <= range; i++) {
    arr.push(i);
  }

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }
  return result;
}
