const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const arr1 = prices.map((num) => ({
  price: num.toFixed(2),
  salePrice: num.toFixed(2) / 2,
}));
console.log('Price objs: ', arr1);
const arr2 = prices.map((num) => `$${num.toFixed(2)}`);
console.log('Formatted prices: ', arr2);
