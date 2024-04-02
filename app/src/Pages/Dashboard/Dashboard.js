import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BusTab from "./Tab/BusTab/BusTab";
import { Carousel } from 'antd';

function Dashboard() {
    const [selectedItem, setSelectedItem] = useState('bus');

    const handleTabClick = (value) => {
        setSelectedItem(value)
    }

    return (
        <>
            <div id="content">
                <section className="container">
                    <div className="row g-4 mt-1">
                        <div className="col-md-12 col-lg-10">
                            <div id="verticalTab" className="resp-vtabs" style={{ display: 'block', width: '100%', margin: '0px' }}>
                                <div className="row g-0">
                                    <div className="col-md-3 my-0 my-md-4">
                                        <ul className="resp-tabs-list">
                                            <li class={`resp-tab-item ${selectedItem === 'bus' ? 'resp-tab-active' : ''}`} aria-controls="tab_item-3" role="tab" onClick={() => handleTabClick('bus')}><span><i className="fas fa-bus"></i></span> Bus</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="resp-tabs-container bg-white shadow-md rounded h-100 p-3">
                                            {selectedItem === 'bus' ? <BusTab /> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="row">
                                <Carousel>
                                    <div>
                                        <div className="col-6 col-lg-12 text-center"> <Link to={'/'}><img src="images/small-banner-9.jpg" alt="" title="" className="img-fluid rounded shadow-md" /></Link> </div>
                                    </div>
                                    <div>
                                        <div className="col-6 col-lg-12 mt-lg-3 text-center"> <Link to={'/'}><img src="images/small-banner-10.jpg" alt="" title="" className="img-fluid rounded shadow-md" /></Link> </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Dashboard;
