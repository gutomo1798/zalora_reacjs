import React, { Component } from 'react';
 
class Content extends Component {
    render() {
        return ( 
            <div className="container">
                <div className="brands">
                    <h1>Featured Brands</h1>
                    <div className="show-brands">
                        <img src={require('../images/zalora.jpg')} />
                        <img src={require('../images/somethingborrowed.jpg')} />
                        <img src={require('../images/ottonon.jpg')} />
                        <img src={require('../images/mango.jpg')} />
                        <img src={require('../images/keds.jpg')} />
                        <img src={require('../images/levis.jpg')} />
                        <img src={require('../images/puma.jpg')} />
                        <img src={require('../images/adidas.png')} />
                        <img src={require('../images/casio.jpg')} />
                        <img src={require('../images/vans.png')} />
                        <img src={require('../images/riverisland.jpg')} />
                        <img src={require('../images/guess.jpg')} />
                        <img src={require('../images/nike.jpg')} />
                        <img src={require('../images/KANKENVC10.jpg')} />
                    </div>
                </div>

                <div className="new-this-week">
                    <h1>New This Week</h1>
                    <div className="show-product">
                        <div className="product">
                            <img src={require('../images/HOMEPAGE_KEMEJADIBAWAH249_MEN.jpg')} />
                            <h3>All Under Rp.188000</h3>
                            <p>
                                Semua produk fashion untuk jiwa stylish Anda di bawah Rp188.000
                                </p>
                        </div>
                        <div className="product">
                            <img src={require('../images/HOMEPAGE_ALLUNDER188K_WOMEN.jpg')} />
                            <h3>KEMEJA DI BAWAH RP249.000</h3>
                            <p>
                                Temukan pilihan kemeja santai hingga formal disini
                                </p>
                        </div>
                        <div className="product">
                            <img src={require('../images/promo-women.jpg')} />
                            <h3>THE CROSSBODY BAGS UP TO 70% OFF</h3>
                            <p>
                                Style tas paling populer untuk menemani hari-hari kasual Anda.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;