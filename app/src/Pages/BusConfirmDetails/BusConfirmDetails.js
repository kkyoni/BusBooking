import React, { useState, useEffect } from 'react';
import { Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { BusConfirmDetailsListActionHandler } from '../../Redux/Actions/user/BusConfirmDetailsList';
import BusConfirmModel from './BusConfirmModel/BusConfirmModel';

function BusConfirmDetails() {
    let dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(false);
    const busConfirmDetailsListData = useSelector((state) => state.BusConfirmDetailsListData?.bus_confirm_details_list_data);
    const handleBusConfirmModelClick = () => {
        setSelectedItem(!selectedItem)
    }

    useEffect(() => {
        dispatch(BusConfirmDetailsListActionHandler(1));
    }, []);
    
    return (
        <>
            <section className="page-header page-header-dark bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Bus - Confirm Details</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="booking-bus.html">Bus</a></li>
                                <li className="active">Bus Confirm Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <section className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bg-white shadow-md rounded p-3 p-sm-4 confirm-details">
                                <h2 className="text-6 mb-3 mb-sm-4">Confirm Bus Details</h2>
                                <hr className="mx-n3 mx-sm-n4 mb-4" />
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row align-items-center trip-title">
                                            <div className="col-5 col-sm-auto text-center text-sm-start">
                                                <h5 className="m-0 trip-place">{busConfirmDetailsListData?.data?.from}</h5>
                                            </div>
                                            <div className="col-2 col-sm-auto text-8 text-black-50 text-center trip-arrow">➝</div>
                                            <div className="col-5 col-sm-auto text-center text-sm-start">
                                                <h5 className="m-0 trip-place">{busConfirmDetailsListData?.data?.to}</h5>
                                            </div>
                                            <div className="col-12 mt-1 d-block d-md-none"></div>
                                            <div className="col-6 col-sm col-md-auto text-3 date">01 July 18, Sun</div>
                                            <div className="col-6 col-sm col-md-auto text-end order-sm-1">
                                                <Button className="text-1" onClick={handleBusConfirmModelClick}>Fare Rules</Button>
                                            </div>
                                            <div className="col col-md-auto text-center ms-auto order-sm-0">
                                                <span className="badge bg-success fw-normal text-1">Refundable</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-sm-center flex-row">
                                            <div className="col-12 col-sm-3 mb-3 mb-sm-0">
                                                <span className="text-3 text-dark operator-name">{busConfirmDetailsListData?.data?.busoperators_list?.operators_name}</span>
                                                <span className="text-muted d-block">{busConfirmDetailsListData?.data?.bustype_list?.type}</span>
                                            </div>
                                            <div className="col col-sm-3 text-center time-info">
                                                <span className="text-5 text-dark">{busConfirmDetailsListData?.data?.time}</span>
                                                <small className="text-muted d-block">{busConfirmDetailsListData?.data?.from}</small>
                                            </div>
                                            <div className="col col-sm-3 text-center d-none d-sm-block time-info">
                                                <span className="text-3 duration">18h 55m</span>
                                                <small className="text-muted d-block">12 Stops</small>
                                            </div>
                                            <div className="col col-sm-3 text-center time-info">
                                                <span className="text-5 text-dark">{busConfirmDetailsListData?.data?.Arrival}</span> <small className="text-muted d-block">{busConfirmDetailsListData?.data?.to}</small> </div>
                                            <div className="col-12 mt-3 text-dark">Seat No(s): {busConfirmDetailsListData?.data?.bus_confirm_details_list?.map((item, index) => (<span className="bg-success text-white rounded px-2" style={{ marginLeft: '5px' }}>{item.seat_numbers}</span>))}
                                            </div>
                                        </div>
                                        {selectedItem ? <BusConfirmModel selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : null}
                                    </div>
                                </div>
                                <div className="alert alert-info mt-4">
                                    <span className="badge bg-info">NOTE:</span> This is a special fare given by the Operator. Operator cancellation charges do apply.
                                </div>
                            </div>
                        </div>

                        <aside className="col-lg-4 mt-4 mt-lg-0">
                            <div className="bg-white shadow-md rounded p-3">
                                <h3 className="text-5 mb-3">Fare Details</h3>
                                <hr className="mx-n3" />
                                <ul className="list-unstyled">
                                    <li className="mb-2">Base Fare <span className="float-end text-4 fw-500 text-dark">${busConfirmDetailsListData.priceSum}</span></li>
                                    <li className="mb-2">Taxes & Fees <span className="float-end text-4 fw-500 text-dark">$0</span></li>
                                    <li className="mb-2">Insurance <span className="float-end text-4 fw-500 text-dark">$0</span></li>
                                </ul>
                                <div className="text-dark bg-light-4 text-4 fw-600 p-3"> Total Amount <span className="float-end text-6">${busConfirmDetailsListData.priceSum}</span> </div>
                                <br />
                                {/* <h3 className="text-4 mb-3 mt-4">Promo Code</h3>
                                <div className="input-group mb-3">
                                    <input className="form-control" placeholder="Promo Code" aria-label="Promo Code" type="text" />
                                    <button className="btn btn-secondary shadow-none px-3" type="submit">APPLY</button>
                                </div>
                                <ul className="promo-code">
                                    <li><span className="d-block text-3 fw-600">FLTOFFER</span>Up to $500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms & Conditions</a></li>
                                    <li><span className="d-block text-3 fw-600">HOTOFFER</span>Up to $500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms & Conditions</a></li>
                                    <li><span className="d-block text-3 fw-600">SUMMEROFFER</span>Up to $500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms & Conditions</a></li>
                                    <li><span className="d-block text-3 fw-600">BIGOFFER</span>Up to $500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms & Conditions</a></li>
                                    <li><span className="d-block text-3 fw-600">FLTOFFER</span>Up to $500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms & Conditions</a></li>
                                    <li><span className="d-block text-3 fw-600">FLTOFFER</span>Up to $500 Off on your booking. Hurry! Limited period offer. <a className="text-1" href="">Terms & Conditions</a></li>
                                </ul> */}
                                <div className="d-grid">
                                    <Button className="btn btn-primary">Proceed To Payment</Button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        </>
    );
}

export default BusConfirmDetails;
