import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import Product from "./Product";
import "./Home.css";
import db from "../firebase";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [lastPage, setLastPage] = useState(false);
  const [product, setProduct] = useState([]);
  const [productSize, setProductSize] = useState(9);

  useEffect(() => {
    db.collection("product").onSnapshot((snapshot) =>
      setProduct(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let difference = product.length - productSize;
    if (difference <= 0) {
      return setLastPage(true);
    }
    return setLastPage(false);
  }, [product, productSize]);

  if (isLoading) {
    return (
      <div>
        <h1>Now Loading</h1>
      </div>
    );
  } else {
    return (
      <div className="home">
        <ImageSlider />
        <h2 className="section-title">Explore Your Needs</h2>
        <div className="product-grid">
          {product.slice(0, productSize).map((product) => {
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
        <div className="footer-container">
          <button
            className={lastPage ? "button-load" : "button-load active"}
            onClick={() => setProductSize(productSize + 9)}
          >
            Load More
          </button>
          <div className={lastPage ? "end-text active" : "end-text"}>
            <h2>This is the end of the product</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
