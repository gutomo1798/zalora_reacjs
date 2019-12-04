import React, { Component } from 'react';

class Slider extends Component {
    state = {
        classPria: 'shop-pria',
        classWanita: 'shop-wanita'
    }
    sliderHover = () => {
        this.setState({ classPria: 'shop-pria mouseover' })
    }
    sliderHover2 = () => {
        this.setState({ classPria: 'shop-pria' })
    }
    sliderHover3 = () => {
        this.setState({ classWanita: 'shop-wanita mouseover' })
    }
    sliderHover4 = () => {
        this.setState({ classWanita: 'shop-wanita' })
    }

    render() {
        return (
            <div className="container">
                <div id="content">
                    <div className="content-item">
                        <div className="advantages">
                            <div className="advantage-item">
                                <i className="fa fa-check-square-o"></i>
                                <span>Produk Original & Terjamin</span>
                            </div>
                            <div className="advantage-item">
                                <i className="fa fa-tags"></i>
                                <span>Ribuan Fashion Brand</span>
                            </div>
                            <div className="advantage-item">
                                <i className="fa fa-refresh"></i>
                                <span>Gratis Pengembalian</span>
                            </div>
                            <div className="advantage-item">
                                <i className="fa fa-question-circle-o"></i>
                                <span>Pertanyaan?</span>
                            </div>
                        </div>
                        <button className="download-discount">
                            Download & Dapatkan Diskon 20% <i className="fa fa-mobile"></i>
                        </button>
                    </div>

                    <div className="content-item">
                        <div className="banner-1">
                            <div className="left-part" onMouseOver={this.sliderHover} onMouseLeave={this.sliderHover2}> {/* onMouseOver : ketika mouse mengarah ke objek || onMouseLeave : ketika mouse meninggalkan objek */}
                                <div className={this.state.classPria}>
                                    Shop Pria
                                </div>
                            </div>
                            <div className="right-part" onMouseOver={this.sliderHover3} onMouseLeave={this.sliderHover4}>
                                <div className={this.state.classWanita}>
                                    Shop Wanita
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-item">
                        <div className="banner-2">
                            <img src={require('../images/banner2.jpg')} />
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="banner-2">
                            <img src={require('../images/banner3.PNG')} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Slider;