/* eslint-disable no-unused-vars */
import {createSlice} from '@reduxjs/toolkit'


const getBasketFromToStorage = () => {
    if( localStorage.getItem("Basket")){
    return  JSON.parse(localStorage.getItem("Basket"));
    }else{
    return [];
    }
 }

const initialState = {
    products : getBasketFromToStorage(),
    drawer:false,
    totalAmount:0,
};

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("Basket", JSON.stringify(basket))
}


export const basketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{

        addToBasket :(state,action) => {
        const findProduct = state.products &&   state.products.find((product) => product.id === action.payload.id);
        if(findProduct){
            //Urun daha onceden eklenmisse
           const extractedProducts =  state.products.filter((product) => product.id !== action.payload.id);
           findProduct.count += action.payload.count;
           state.products = [...extractedProducts, findProduct];
           writeFromBasketToStorage(state.products);

        }else{
            //Urun daha onceden eklenmemisse
             state.products = [...state.products,action.payload];
            writeFromBasketToStorage(state.products)
        }
        },

        setDrawer:(state,action) => {
            state.drawer = !state.drawer;
        },

        calculateBasketPrice:(state) => {
            state.totalAmount = 0;
          state.products && state.products.map((product) => {
            state.totalAmount +=(product.price * product.count)
          })  
        }
    }
})



export const { addToBasket , setDrawer ,calculateBasketPrice}  = basketSlice.actions

export default basketSlice.reducer