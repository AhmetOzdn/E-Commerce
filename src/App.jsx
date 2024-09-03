
//Component imports
import PageContainer from "./Container/pageContainer";
import Navbar from "./Components/navbar";
import "./App.css";
//Import Components
import Loading from "./Components/loading";
import RouterConfig from "./Config/routerConfig";
//Import Mui
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { calculateBasketPrice, setDrawer } from "./Redux/Slices/basketSlice";
import { useEffect } from "react";
function App() {
  const { products, drawer ,totalAmount} = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(calculateBasketPrice());
  }, [dispatch]);

  return (
    <div>
      <PageContainer>
        <Navbar></Navbar>
        <RouterConfig></RouterConfig>
        <Loading></Loading>
        <Drawer
          onClose={() => dispatch(setDrawer())}
          anchor="right"
          open={drawer}
        >
          {products &&
            products.map((product) => {
              return (
                  <div  key={product.id} className="flex-row basketContainer">
                    <img
                      className="basketImage"
                      src={product.image}
                      alt=""
                      width={100}
                      height={100}
                    />
                    <p className="basketTitle">
                      {product.title}({product.count})
                    </p>
                    <p className="basketPrice">{product.price} ₺ </p>
                    <button className="deleteButton">Sil</button>
                  </div>
              );
            })}
            <div>
                  <h3 className="totalPrice">Toplam Tutar : {totalAmount} ₺</h3>
            </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
