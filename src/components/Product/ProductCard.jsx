import React from "react";
import "../Product/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="prodcutcard w-[13rem] transition-all m-[2rem]">
      <div className="image h-[14rem] ">
        <img
          src={product.imageUrl}
          className="w-full h-full object-cover object-top"
          alt=""
        />
      </div>
      <div className="textpart">
        <p className="brand font-bold">{product.brand}</p>
        <p className="title">{product.title}</p>
        <div className="price">
          <p className="discountedprice font-semibold">
            ${product.discountedPrice}
          </p>
          <p className="originalprice line-through">${product.price}</p>
          <p className="discount text-green-600 font-semibold">
            {product.discountPersent}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
