import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Product.css";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

function Home({mask}) {
  const images = [
    { url: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" },
    { url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"},
    { url: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"},
 
];
 

  
  return (
    <div className="home">
   
      <div className="home__container">
      <SimpleImageSlider
                    width={1350}
                    height={504}
                    style={{ width: "100%",
                    zIndex: "-1",
                    marginBottom: "-220px",
                    WebkitMaskImage: mask,
                    maskImage: mask
                  }}
                    showBullets={false}                  
                    slideDuration={0.5}
                    images={images}
                />
       
        
        
      

        <div className="home__row">
        <Link to="/electronics" className="home__product" >
          <Product
            id="12321341"
            title="Books"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          </Link>
    
          <Link to="/electronics" className="home__product" >
          <Product
            id="49538094"
            title="Cooking Stuff"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          </Link>
          
        </div>

        <div className="home__row">
          <Link to="/electronics" className="home__product" >
            <Product
            id="4903850"
            title="Electronics"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          </Link>
          
          <Link to="/electronics" className="home__product" >
          <Product
            id="23445930"
            title="Speaker"
            
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          </Link>
          <Link to="/electronics" className="home__product" > 
          <Product
            id="3254354345"
            title="Mobile"
          
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          </Link>
         
        </div>

        <div className="home__row">
        <Link to="/electronics" className="home__product" >
          <Product
            id="90829332"
            title="TV Monitor"
            
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
