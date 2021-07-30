export const addItemLocalToCart = (items, newitem, isAuthenticated) => {
  const existingCartItemIndex = items.findIndex(
    (item) => item.id === newitem.id
  );
  if (existingCartItemIndex > -1) {
    newitem.itemTotal = newitem.quantity * newitem.salePrice
    const newState = [...items, newitem];
    newState[existingCartItemIndex].quantity += newitem.quantity;
    if (!isAuthenticated) {
      localStorage.setItem('localCart', JSON.stringify(newState))
    }
    return newState;
  } else {
    newitem.itemTotal = newitem.quantity * newitem.salePrice
    const newState = [...items, newitem];
    if (!isAuthenticated) {
      localStorage.setItem('localCart', JSON.stringify(newState))
    }
  }

  const updatedItems = [...items, newitem]
  // localStorage.setItem('localCart', JSON.stringify(updatedItems))

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
      const itemTotal = item.quantity * item.salePrice;
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