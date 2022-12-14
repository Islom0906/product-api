import React from "react";
import {Link} from 'react-router-dom'


const ProductCard = ({product}) => {
  return (
    <Link to={`/product/${product.id}`} className="relative flex flex-col border rounded-lg p-7">
      <img
        className="w-full h-294"
        src={product.image}
        alt=""
      />
      <div className="flex flex-col items-start space-x-2 product-card__content">
        <div className="title">
          <h1 className="text-base font-bold text-text">
            {product.title}
          </h1>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-3xl font-bold text-text">${product.price}</span>
          <button className="p-3.5 border rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                fill="rgba(53,151,64,1)"
              />
            </svg>
          </button>
        </div>
      </div>
      <button className="absolute z-10 p-3 border rounded-full top-3 right-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
            fill="#FFCF55"
          />
        </svg>
      </button>
    </Link>
  );
};

export default ProductCard;
