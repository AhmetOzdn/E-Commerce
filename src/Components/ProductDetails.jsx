/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../Redux/Slices/productSlice";
import "../Css/ProductDetails.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasketPrice } from "../Redux/Slices/basketSlice";



function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { category, description, image, price, title } = selectedProduct;
  const [count , setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products && products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  const increament = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count
    }

    dispatch(addToBasket(payload));
    dispatch(calculateBasketPrice());
  }

  return (
    <div className="main-container">
      <div className="container">
        <div className="img-container">
          <img
            src={image}
            width={400}
            height={400}
            alt=""
            className="card-img"
          />
        </div>
        <div className="">
          <h2 className="header">{title}</h2>
          <span className="description">Kategori : {category}</span>
          <p className="description">{description}</p>
          <div>
            <span className="price">Fiyat : {price} ₺</span>
            <div className="price-container">
            <CiCirclePlus onClick={()=> increament(count)} className="plus-icon"/>
            {count}
            <CiCircleMinus onClick={()=> decrement(count)} className="increase-icon"/>
            </div>
          </div>

          <button className="button" onClick={addBasket}>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
