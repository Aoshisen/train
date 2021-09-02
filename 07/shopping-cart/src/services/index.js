//模拟请求后端数据
const getData = () => {
  return fetch(
    'https://react-shopping-cart-67954.firebaseio.com/products.json',
  ).then((res) => res.json());
};

//后端存储数据模拟
const storageDataToLocal = async (data) => {
  localStorage.setItem('goods', JSON.stringify(data));
};
const getDataFromLocal = async () => {
  return JSON.parse(localStorage.getItem('goods'));
};

//模拟后端筛选逻辑(根据品类筛选)
const filterProducts = async (filterdSizes) => {
  let { products } = await getData();
  return products.filter((item, index) => {
    //每个商品的size
    let { availableSizes } = item;
    let shouldReturn = false;
    for (let i = 0; i < filterdSizes.length; i++) {
      if (availableSizes.indexOf(filterdSizes[i]) !== -1) {
        shouldReturn = true;
      }
    }
    if (filterdSizes.length == 0) {
      return true;
    }
    return shouldReturn;
  });
};

//模拟后端排序逻辑(基于筛选后的商品，以及排序规则进行排序)
const orderProducts = async (filterdProducts, orderBy) => {
  switch (orderBy) {
    case 'Select':
      filterdProducts;
      break;
    case 'Lower':
      filterdProducts.sort((item1, item2) => item1.price - item2.price);
      break;
    case 'High':
      filterdProducts.sort((item1, item2) => item2.price - item1.price);
      break;
    default:
      filterdProducts;
  }
  return filterdProducts;
};

export {
  getData,
  storageDataToLocal,
  filterProducts,
  orderProducts,
  getDataFromLocal,
};
