import React, { Component } from 'react';
import {ProductConsumer} from '../context'
import styled from 'styled-components';
import ProductSlide from './ProductSlide'
import Title from './Title'
import {storeProducts, detailProduct} from '../data';

class Slideshow extends Component {
    constructor(props) {
        super(props);
       this.state = {      
           products: [],   
            slideshow: [],         
            slideIndex: 0
       };
       this.currentIndex = 0; 
       this.pause = false;
       this.class = "use";
       this.oterClass = "test_";
     }
        
    componentDidMount() {
        this.setProducts();
      }
    
      componentDidUpdate() {
        let that = this;     
        console.log("voir : ", that) 
        if(this.pause === true) {
          //alert("yes")
            clearInterval(this.timeout);
            //this.timePause = setTimeout(function(){
              //clearInterval(this.timePause);        
            //}, 8000);
            // this.pause = false;
        }
          else {
        this.timeout = setTimeout(function () {
          that.goTo('auto')
        }, 3000);
      }
      }

      componentWillUnmount() {
        clearInterval(this.timeout);
      }

          /* Remplie le state des produits et le slideshow */
     setProducts() {
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        let tempProductsVoir = tempProducts.slice(0,3);
        this.setState(()=>{
            return {products:tempProductsVoir, slideshow: tempProductsVoir[0]}
        })
    }

    /* Appel le component ProductSlide une fois que le state est remplie */
    sentProd() {
        return (
                <React.Fragment>
                    <ProductSlide product={this.state.slideshow} className={this.class} />
                </React.Fragment>
            )
        }
    
    sentIndic(array) {
        const listIndicators = this.state.products.map((item, index) => 
      <li
        key={index}
        className={`list-inline-item ${this.currentIndex === index ? 'active' : ''}`}
        onClick={() => this.goTo(index)}
      >0{index + 1}</li>
    );
    return (
      <ul className="indicators list-inline text-center">
        {listIndicators}
      </ul>
    );
    }

    goTo = (direction) => { 
        if (direction !== 'auto') {
          this.setState({pause : true});
          this.class = 'arret';
          console.log(" true ==== true batard");
        }
         if (this.state.products !== []) {
        let index = 0;
        switch(direction) {
          case 'auto':
            index = this.currentIndex + 1;
            this.currentIndex = index >= this.state.products.length ? 0 : index;          
          break;
          default:
            this.pause = true;
            this.currentIndex = direction;
            this.oterClass = "test_"+this.currentIndex
          break;
        }
         this.setState({
           slideIndex: this.currentIndex,
           slideshow: this.state.products[this.currentIndex]
         });
        } else {
            console.log("ok")
        }
        }

    render() {
        console.log("Mon state : ",this.state)
        if (this.state.product !== []) {
        return (
            <React.Fragment>
              <Content>
              <div className={this.oterClass}>
                <div className="w-100">
                        {this.sentProd()}
                    {this.sentIndic()}
                </div>
              </div>
              </Content>
            </React.Fragment>
        )
        } else {
            console.log("ok")
        }
}
}

const Content = styled.div`
      .test_ {
      background: #FDC830;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      height: 100vh;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
        animation-duration: 9s;
        animation-name: slideOut;
        animation-iteration-count: infinite;
      }
      @keyframes slideOut {
        from {
          background: #f12711;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to left, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to left, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        20% {
          background: #f12711;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to left, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to left, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        40% {
          background: #00F260;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to left, #0575E6, #00F260);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to left, #0575E6, #00F260); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        60% {
          background: #00F260;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to left, #0575E6, #00F260);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to left, #0575E6, #00F260); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        80%{
          background: #FDC830;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
        to{
          background: #FDC830;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      }
      .test_0 {
        display: flex;
      justify-content: flex-end;
      flex-direction: column;
      height: 100vh;
        background: #f12711;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to left, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to left, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      .test_1 {
        display: flex;
      justify-content: flex-end;
      flex-direction: column;
      height: 100vh;
        background: #00F260;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to left, #0575E6, #00F260);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to left, #0575E6, #00F260); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      .test_2 {
        display: flex;
      justify-content: flex-end;
      flex-direction: column;
      height: 100vh;
        background: #FDC830;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      .title {
        font-size:50px;
      }
      li {
        opacity: 0.5;
        color: #ffffff;
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
        padding-bottom: 1px;
      }
      .active, li:hover {
        opacity: 1;
        border-bottom: 1px solid #000;
        border-color: white;
      }
      }

`;

export default Slideshow;
