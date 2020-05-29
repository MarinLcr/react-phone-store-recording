import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

class ProductSlide extends Component {
  render() {
    return (
      <div className="wall">
        <div className="container">
          <Product>
            <div
              className={`row flex-nowrap align-items-center ${this.props.className}`}
            >
              <div className="col-1"></div>
              <div className="info col-5">
                <h2 className="title_price">{this.props.product.price},00$</h2>
                <h1 className="title">{this.props.product.title}</h1>
                <p className="title_catch">{this.props.product.catch}</p>
                <button className="button">
                  <Link to="/details" className="text-uppercase text-dark">
                    shop now
                  </Link>
                </button>
              </div>
              <div className="col-5 d-flex justify-content-center">
                <img
                  src={this.props.product.img}
                  alt=""
                  className="w-75 img-product"
                />
              </div>
            </div>
          </Product>
        </div>
      </div>
    );
  }
}

const Product = styled.div`
    a:hover {
        text-decoration: none;
    }
    .use {
        animation-duration: 3s;
        animation-name: slidein;
        animation-iteration-count: infinite;
    }

@keyframes slidein {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1:
  }
  80% {
    opacity: 1;
  }
  100%{
    opacity:0
  }
}


    .info {
        color:white;
        width: 33%;
    }
    .info .title {
    display: inline-block;
    text-align: left;
    line-height: 63px;
    letter-spacing: 0px;
    font-weight: 600;
    font-size: 63px;
    border-color: rgb(255, 255, 255);
    border-style: none;
    padding: 0px 0px 18px;
    color: rgb(255, 255, 255);
    }
    .title_price {
        text-align: left;
    line-height: 22px;
    font-weight: 400;
    font-size: 16px;
    }
    .button {
        z-index: 6;
    background-color: rgb(255, 255, 255);
    font-family: Roboto;
    display: inline-block;
    visibility: visible;
    text-align: left;
    line-height: 16px;
    letter-spacing: 0px;
    font-weight: 500;
    font-size: 12px;
    border-color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 2px;
    border-radius: 25px;
    padding: 5px 23px;
    color: rgb(0, 0, 0);
    }
    .w-50 img {
        width: 66%;
    }
    .title_catch {
        z-index: 5;
    text-align: left;
    line-height: 24px;
    letter-spacing: 0px;
    font-weight: 300;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.8);
    width: 350px;
}
    }
`;

export default ProductSlide;
