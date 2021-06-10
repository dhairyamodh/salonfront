import dummyCategories from '../../jsons/category.json'
import dummyProducts from '../../jsons/products.json'

const initState = {
    allCategories: dummyCategories,
    allProducts: dummyProducts
}

const shopReducer = (state = initState, action) => {
    switch (action.type) {



        default:
            return state
    }
}

export default shopReducer