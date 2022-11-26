import React from "react";
import { Link } from "react-router-dom";
import "./HomeMiddlePart.css";

const HomeMiddlePart = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/promo-fw22-blackfriday-footwear-tcc_tcm221-967804.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">New Collection For Fall</h1>
            <p class="py-6">
              Discover all the new arrivals of ready-to-wear collection
            </p>
            <Link to="/shop">
              <button class="btn btn-primary">Show Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddlePart;
