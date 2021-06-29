export const addItemLocalToCart = (items, newitem, isAuthenticated) => {
  const existingCartItemIndex = items.findIndex(
    (item) => item.id === newitem.id
  );
  console.log('0', existingCartItemIndex,);

  if (existingCartItemIndex > -1) {
    console.log('1');

    const newState = [...items];
    newState[existingCartItemIndex].quantity += newitem.quantity;
    if (!isAuthenticated) {
      console.log('2');

      localStorage.setItem('localCart', JSON.stringify(newState))
    }
    console.log('3')
    return newState;
  }
  console.log('else');

  const updatedItems = [...items, newitem]
  localStorage.setItem('localCart', JSON.stringify(updatedItems))

  return updatedItems;
};

export const getLocalStorageCart = (items) => {
  const localItems = localStorage.getItem('localCart')
  if (localItems) {
    return JSON.parse(localItems)
  }
  return false
};

export const removeItemLocalFromCart = (items, currentItems, isAuthenticated) => {
  let updatedItems = items.reduce((acc, item) => {
    if (item.id === currentItems.id) {
      const newQuantity = item.quantity - currentItems.quantity;

      return newQuantity > 0
        ? [...acc, { ...item, quantity: newQuantity }]
        : [...acc];
    }

    return [...acc, item];
  }, []);
  if (!isAuthenticated) {
    localStorage.setItem('localCart', JSON.stringify(updatedItems))
  }
  return updatedItems
};

export const clearItemLocalFromCart = (items, currentItems, isAuthenticated) => {
  let updatedItems = items.filter((item) => item._id !== currentItems);
  if (!isAuthenticated) {
    localStorage.setItem('localCart', JSON.stringify(updatedItems))
  }
  return updatedItems
};