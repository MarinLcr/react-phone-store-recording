import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3
            my-3">
                <div className="card">
                <ProductConsumer>
                {(value) => (
                    <div
                        className="img-container p-5" 
                        onClick={() => 
                            value.handleDetail(id)
                        }
                    >
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <div className="product-buttons-wrap">
                            <Link to="/details">
                                <FontAwesomeIcon icon={faEye} style={{color: "#FFF"}} />
                            </Link> 
                            <Link to="/">
                                <FontAwesomeIcon 
                                icon={faShoppingCart} 
                                style={{color: "#FFF"}}
                                disabled={inCart ? true : false} 
                                onClick={()=> {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                                >
                                    {inCart?(<p className="text-capitalize mb-0" disabled>
                                    in cart</p>):(<i className="fas fa-cart-plus " />)}
                                </FontAwesomeIcon> 
                            </Link>
                        </div>
                        {/* <button 
                            className="cart-btn" 
                            disabled={inCart ? true : false} 
                            onClick={()=> {
                                value.addToCart(id);
                                value.openModal(id);
                                }}
                        >

                        {inCart?(<p className="text-capitalize mb-0" disabled>
                        in cart</p>):(<i className="fas fa-cart-plus " />)}    
                        </button> */}
                        
                    </div>)}
                    

                    </ProductConsumer>


                    {/* card footer */}
                    <div className="card-footer text-center">
                        <p className="title mb-0">
                            {title}
                        </p>
                        <h5 className="mb-0">
                            <span className="price mr-1">$</span>
                            <span className="price">{price},00</span>
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card {
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        box-shadow:2px 2px 5px 0rgba(0,0,0,0.2)
    }
}
.img-container{
    position:relative;
    overflow:hidden;
    background-color:var(--mainWhite);
}
.card-img-top {
    transition: all 1s linear;
}
.img-container:hover .card-img-top a {
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0, 0);
}
.img-container:hover .product-buttons-wrap a {
    opacity: 1;
    transform: translateY(0px);
}
.product-buttons-wrap a:hover {
    background-color: white;
    box-shadow: 0 0 6px -2px rgba(0, 0, 0, .7);
}
.product-buttons-wrap a:hover .fa-shopping-cart, .product-buttons-wrap a:hover .fa-eye {
    color:black !important;
}
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
.title {
    font-weight: 500;
    font-size: 16px;
    color: black;
}
.price {
    font-weight: 400;
    font-size: 14px;
}
.product-buttons-wrap {
    bottom: 4%;
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0%;
}
.fa-shopping-cart, .fa-eye {
    transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}
.product-buttons-wrap a { 
    border: 0;
    background-color: #1b1b1b;
    color: #fff;
    min-width: 1px;
    margin: 0 4px;
    display: inline-block;
    border-radius: 4px;
    width: 37px;
    height: 37px;
    text-align: center;
    vertical-align: middle;
    padding: 0;
    line-height: 38px;
    opacity: 0;
    transform: translateY(15px);
    -moz-transform: translateY(15px);
    -webkit-transform: translateY(15px);
    -ms-transform: translateY(15px);
    transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}
`

export default Product;