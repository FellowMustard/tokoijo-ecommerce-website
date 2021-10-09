import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import Product from "./Product";
import "./Home.css";
import db from "../firebase";

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    db.collection("product").onSnapshot((snapshot) =>
      setProduct(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className="home">
      <ImageSlider />
      <h2 className="section-title">Explore Your Needs</h2>
      <div className="product-grid">
        {product.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              discount={product.data.discount}
              image={product.data.image}
              title={product.data.title}
              price={product.data.price}
              rating={product.data.rating}
              location={product.data.location}
              sold={product.data.sold}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
