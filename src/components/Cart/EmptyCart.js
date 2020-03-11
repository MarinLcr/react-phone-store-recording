import React, { Component } from 'react';
import styled from 'styled-components';


class EmptyCart extends Component {
    render() {
        return (
            <EmptyWrapper>
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="row bg-white p-5">
                        <div className="col-10 mx-auto text-center text-title">
                            <h1>Your cart is currently empty.</h1>
                        </div>
                    </div>
                </div>
            </EmptyWrapper>
        );
    }
}

const EmptyWrapper = styled.div`
background-color: #1e1e1e;
height: 100vh;
padding-top: 69px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
`

export default EmptyCart; 