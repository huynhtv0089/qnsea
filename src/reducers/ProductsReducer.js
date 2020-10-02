const products = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_LIST_PRODUCTS':
        case 'FETCH_PRODUCTS':
            return action.listProducts;
        default:
            return state;
    }
}
  
export default products