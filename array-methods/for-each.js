const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((element) => console.log(element));

console.log('Reverse order:');
const newArray = values.reduceRight((accumulator, value) => {
  console.log(value);
  return [...accumulator, value];
}, []);
console.log(newArray);
