import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Skeleton from "./skeleton/Skeleton";

const product = ({ products }) => {
  return (
    <div className="product">
      <div className="card-container">
        {products ? (
          <h3 className="product-title"> Featured products</h3>
        ) : (
          <h3>{null}</h3>
        )}

        {products &&
          products.map((pd) => {
            const final = (pd.price.raw - pd.price.raw * 0.2).toFixed(2);
            return (
              <div className="card">
                <img
                  src={pd.media.source}
                  alt={pd.name}
                  className="product-img"
                />
                <div className="card-info">
                  <div className="card-price">
                    <h4 className="price">{pd.price.formatted_with_symbol}</h4>
                    <h4 className="price after-discount">${final}</h4>
                  </div>
                  <h4 className="product-name">{pd.name}</h4>
                  <button className="buy-btn">
                    {" "}
                    Buy Now <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            );
          })}

        {!products && <Skeleton />}
      </div>
    </div>
  );
};

export default product;
