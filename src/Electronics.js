import React from 'react';
import ElectronicProduct from "./ElectronicProduct";

function Electronics() {
    return (

        <div>
          <div className="home__row">
          
          <ElectronicProduct
            id="12321341"
            title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Bordeaux/Copper Rose, One Size (S and L Bands Included)"
          
            price={179.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71jiGaztijL._AC_SL1500_.jpg"
          />
          
    

          <ElectronicProduct
            id="49538094"
            title="
            Fitbit Versa Lite Edition Smart Watch, One Size (S and L Bands Included), 1 Count"
            price={120.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71jb-Kr5JGL._AC_SL1500_.jpg"
          />
          
          
        </div>
        <div className="home__row">
          
            <ElectronicProduct
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            

            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          
          
          
          <ElectronicProduct
            id="23445930"
            title="Samsung Galaxy Watch Active 2 (44mm, GPS, Bluetooth), Aqua Black (US Version)"
            price={199.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51G8gR4wGFL._AC_SL1024_.jpg"
          />
          <ElectronicProduct
            id="3254354345"
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminium Case with Black Sport Band"
            price={298.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <ElectronicProduct
            id="90829332"
            title="Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Alexa Built-in, Carbon/Graphite, One Size (S & L Bands Included)"
            price={329.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vCIH5JZWL._AC_SL1500_.jpg"
          />
        </div>
          
        </div>
    )
}

export default Electronics
