import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

class Details extends Component {
  render() {
    return (
      <ProductDetails>
        <ProductConsumer>
          {(value) => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart,
            } = value.detailProduct;
            return (
              <div className="container d-flex flex-column justify-content-center">
                <div className="row bg-white p-4 vh-75">
                  <div className="col-10 mx-auto col-md-6 my-3 p-5">
                    <h1 className="title">{title}</h1>
                    <h4 className="text-blue">
                      <strong className="price">
                        price : <span>$</span>
                        {price},00
                      </strong>
                    </h4>
                    <p className="info py-3 my-3">{info}</p>
                    <h4 className="mt-3 mb-2">
                      <strong className="made">
                        Made by : <span>{company}</span>
                      </strong>
                    </h4>
                    <div className="container-button">
                      <ButtonContainer>
                        <Link to="/">
                          <FontAwesomeIcon
                            icon={faUndo}
                            style={{ color: "#FFF" }}
                          />
                        </Link>
                      </ButtonContainer>
                      <ButtonContainer
                        disabled={inCart ? true : false}
                        cart={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? (
                          <FontAwesomeIcon
                            cart
                            icon={faCheck}
                            style={{ color: "#FFF" }}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faCartPlus}
                            style={{ color: "#FFF" }}
                          />
                        )}
                      </ButtonContainer>
                    </div>
                  </div>
                  <div className="col-3 mx-auto col-md-6 my-3 text-center">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </ProductDetails>
    );
  }
}

const ProductDetails = styled.div`
  padding: 69px 0 0 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1e1e1e;
  .row {
    height: 75vh;
  }
  .img-fluid {
    width: 65%;
    max-width: 300px;
  }
  .title {
    color: #232323;
    font-size: 24px;
    line-height: 22px;
    font-weight: 600;
  }
  .price,
  .made {
    font-weight: 500;
    font-size: 14px;
    color: black;
  }
  .info {
    border-bottom: 1px solid #e8e8e8;
    border-top: 1px solid #e8e8e8;
  }
`;

export default Details;
