const getData = () => {
  return fetch(
    'https://react-shopping-cart-67954.firebaseio.com/products.json',
  ).then((res) => res.json());
};
export { getData };
