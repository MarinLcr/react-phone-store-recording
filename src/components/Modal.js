import React, { Component } from 'react';
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen,closeModal} = value;
                    const{img, title, price} = value.modalProduct
                    
                    if(!modalOpen) {
                    return null;
                    } 
                    else {
                        return (<ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4
                                    text-center text-capitalize p-5">
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5 className="title">{title}</h5>
                                        <h5 className="price">price : $ {price},00</h5>
                                        <ButtonContainer onClick={()=>closeModal()}>
                                            <Link to="/">
                                                <FontAwesomeIcon icon={faUndo} style={{color: "#FFF"}} />
                                            </Link>
                                        </ButtonContainer>
                                        
                                            <ButtonContainer onClick={()=>closeModal()}>
                                                <Link to="/cart">
                                                    <FontAwesomeIcon icon={faCartPlus} style={{color: "#FFF"}} />
                                                </Link>
                                            </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
.title {
    font-weight: 500;
    font-size: 16px;
    color: black;
}
.price {
    font-weight: 400;
    font-size: 14px;
}
#modal{
    background:var(--mainWhite);
}
`

export default Modal;