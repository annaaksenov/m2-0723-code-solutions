const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const arr1 = prices.map((num) => ({
  price: num,
  salePrice: num / 2,
}));
console.log(arr1);
