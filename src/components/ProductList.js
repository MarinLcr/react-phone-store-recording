import React, { Component } from 'react'; 
import Product from './Product'
import styled from 'styled-components';
import Title from './Title'
import {ProductConsumer} from '../context'
import Slideshow from './Slideshow'
import Footer from './Footer'

class ProductList extends Component {
    render() {
        return (
            <ProductWrapperList>
                    <Slideshow />
                    <div className="container">
                    <h2 className="title transition text-center text-uppercase">Best products</h2>
                    <div className="row">
                    <ProductConsumer>
                        {(value) => {
                            return value.products.map( product => {
                                return <Product key={product.id} product=
                                {product} />
                            })
                        }}
                    </ProductConsumer>
                    </div>
                    </div>
                    <Footer></Footer>
            </ProductWrapperList>
        );
    }
}

const ProductWrapperList = styled.div`
.transition {
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    margin: 5em 0 4em 0;
`

export default ProductList;