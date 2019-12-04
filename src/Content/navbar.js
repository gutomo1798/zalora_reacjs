
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component { 
    render() {
        return (
            <div> 
                <nav>
                    <div className="container">
                        <div className="logo nav"><a href="#">Zalora</a></div>
                        <div className="menu nav">
                            <Link to="/">Wanita</Link>
                            <Link to="/">Pria</Link>
                            <Link to="/">Anak-Anak</Link>
                        </div>
                        <div className="search nav">
                            <input type="text" placeholder="Cari produk, tren, dan merek" />
                            <i className="fa fa-search"></i>
                        </div>
                        <div className="user nav">
                            <span className="cart"><i className="fa fa-shopping-cart"></i></span>
                            <span className="wishlist"><i className="fa fa-heart"></i></span>
                            <span className="account"><i className="fa fa-user"></i></span>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;