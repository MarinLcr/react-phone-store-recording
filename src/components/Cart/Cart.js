import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import {ProductConsumer} from '../../context';
import CartTotals from './CartTotals';

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0) {
                            return (
                                <CartWrapper>
                                    <div className="container">
                                        <div className="row cont-cart">
                                            <Title name="your" title="cart" />
                                            <CartColumns />
                                            <CartList value={value}/>
                                            <CartTotals value={value} history={this.props.history} />
                                        </div>
                                    </div>
                                </CartWrapper>
                            )
                        }
                        else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

const CartWrapper = styled.div`
    height: 100vh;
    background: #1e1e1e;
    padding: 69px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .button {
    background-color: black;
    line-height: 16px;
    letter-spacing: 0px;
    font-weight: 500;
    font-size: 12px;
    border-color: black;
    border-style: solid;
    border-width: 2px;
    padding: 5px 23px;
    color: white;
    text-transform: uppercase;
    }
    .button:hover {
    background-color: white;
    line-height: 16px;
    letter-spacing: 0px;
    font-weight: 500;
    font-size: 12px;
    border-color: black;
    border-style: solid;
    border-width: 2px;
    padding: 5px 23px;
    color: black;
    text-transform: uppercase;
    }
    .cont-cart {
        background: white;
        height: 75vh;
        padding: 2em;
        overflow: auto;
    }
    .text-total {
        font-size: 18px;
        display: block;
    }
    .list-wrapper {
        border-bottom: 1px solid grey;
    }
`

export default Cart;