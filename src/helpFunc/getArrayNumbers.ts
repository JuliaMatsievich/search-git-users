export const getArrayOfNumbers = (length: number) => {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(i);
  }
  return arr;
};
