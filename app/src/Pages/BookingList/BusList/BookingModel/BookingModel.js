import React from 'react';
import { Modal } from 'antd';
import { IoIosCloseCircle } from "react-icons/io";

function BookingModel({ MenuItem, selectedItem, setSelectedItem, selectedTabItem, setSelectedTabItem, busList, handleBusBookClick, selectedSeats, totalPrice }) {
    const handleBusContinue = () => {
        const seatNumbers = [];
        const seatPrices = [];
        const seatClasses = [];
        selectedSeats.forEach(selectedSeat => {
            const [busId, seatNumber] = selectedSeat.split('_');
            const seat = busList[busId].seats.find(seat => seat.seatNumber === parseInt(seatNumber));
            seatNumbers.push(seat.seatNumber);
            seatPrices.push(seat.price);
            seatClasses.push(seat.class);
        });
    };
    return (
        <>
            {selectedItem ? <Modal title="Bus Booking Details" open={selectedItem} onCancel={() => setSelectedItem(false)} width={1000}>
                <div className="modal-body">
                    <div className="bus-details">
                        <div className="row align-items-sm-center flex-row mb-4">
                            <div className="col col-sm-3">
                                <span className="text-4 text-dark operator-name">AK Tour & Travels</span>
                                <span className="text-muted d-block">AC Sleeper</span>
                            </div>
                            <div className="col col-sm-3 text-center time-info">
                                <span className="text-5 text-dark">12:00</span>
                                <small className="text-muted d-block">Mumbai</small>
                            </div>
                            <div className="col col-sm-3 text-center d-none d-sm-block time-info">
                                <span className="text-3 duration">06h 32m</span>
                                <small className="text-muted d-block">12 Stops</small>
                            </div>
                            <div className="col col-sm-3 text-center time-info">
                                <span className="text-5 text-dark">05:15</span>
                                <small className="text-muted d-block">Surat</small>
                            </div>
                        </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            {MenuItem.map((item, index) => (
                                <li className="nav-item">
                                    <div key={index} className={index === selectedTabItem ? 'nav-link active active' : 'nav-link'} onClick={() => setSelectedTabItem(index)}>
                                        {item}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="tab-content my-3" id="myTabContent">
                            {selectedTabItem === 0 ? (
                                <div className="tab-pane fade show active">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 text-center">
                                            <p className="text-muted text-1">Click on Seat to select/ deselect</p>
                                            <div id="seat-map" className='seatCharts-container'>
                                                <div className="front-indicator">Front</div>
                                                {Object.keys(busList).map(busId => (
                                                    <div className="seatCharts-row">
                                                        <div key={busId} className="seatCharts-cell seatCharts-space">{busId}</div>
                                                        {busList[busId].seats.map(seat => (
                                                            <>
                                                                {seat.seatNumber != 0 ?
                                                                    <div className={`seatCharts-seat seatCharts-cell ${seat.seatBook ? 'bookingseat' : ''} ${seat.class === 'first' ? 'first-class' : 'economy-class'} ${seat.available ? 'unavailable' : 'available'}`} onClick={() => handleBusBookClick(seat.seatNumber, busId, seat.price)}>
                                                                        {seat.seatNumber}
                                                                    </div> : <div className="seatCharts-cell seatCharts-space"></div>}
                                                            </>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                            <div id="legend">
                                                <ul className="seatCharts-legendList">
                                                    <li className="seatCharts-legendItem">
                                                        <div className="seatCharts-seat seatCharts-cell available first-class"></div>
                                                        <span className="seatCharts-legendDescription">First Class</span>
                                                    </li>
                                                    <li className="seatCharts-legendItem">
                                                        <div className="seatCharts-seat seatCharts-cell available economy-class"></div>
                                                        <span className="seatCharts-legendDescription">Economy Class</span>
                                                    </li>
                                                    <li className="seatCharts-legendItem">
                                                        <div className="seatCharts-seat seatCharts-cell unavailable first-class"></div>
                                                        <span className="seatCharts-legendDescription">Already Booked</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                                            <div className="booking-details">
                                                <h2 className="text-5">Booking Details</h2>
                                                <p>Selected Seats (<span id="counter">{selectedSeats.length}</span>):</p>
                                                <ul id="selected-seats">
                                                    {selectedSeats.map(selectedSeat => {
                                                        const [busId, seatNumber] = selectedSeat.split('_');
                                                        const seat = busList[busId].seats.find(seat => seat.seatNumber === parseInt(seatNumber));
                                                        return (
                                                            <>
                                                                <li key={selectedSeat} id={`cart-item-${selectedSeat}`}>
                                                                    {seat.class === 'first' ? 'First Class' : 'Economy Class'} Seat #{seat.seatNumber}: <b>${seat.price}</b>
                                                                    <IoIosCloseCircle className="cancel-cart-item text-danger text-4" onClick={() => handleBusBookClick(seat.seatNumber, busId, seat.price)} />
                                                                </li>
                                                            </>
                                                        );
                                                    })}
                                                </ul>
                                                <div className="d-flex bg-light-4 px-3 py-2 mb-3">Total Fare: <span className="text-dark text-5 fw-600 ms-2">$<span id="total">{totalPrice}</span></span></div>
                                                <div className="d-grid">
                                                    <button className="btn btn-primary" onClick={handleBusContinue}>Continue</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="tab-pane fade show active">
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Hours before Departure</th>
                                                <th className="text-center">Refund Percentage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Before 0 Hrs.</td>
                                                <td className="text-center">0%</td>
                                            </tr>
                                            <tr>
                                                <td>Before 24 Hrs.</td>
                                                <td className="text-center">30%</td>
                                            </tr>
                                            <tr>
                                                <td>Before 48 Hrs.</td>
                                                <td className="text-center">60%</td>
                                            </tr>
                                            <tr>
                                                <td>Before 60 Hrs.</td>
                                                <td className="text-center">75%</td>
                                            </tr>
                                            <tr>
                                                <td>Above 60 Hrs. </td>
                                                <td className="text-center">80%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="fw-bold">Terms & Conditions</p>
                                    <ul>
                                        <li>The penalty is subject to 24 hrs before departure. No Changes are allowed after that.</li>
                                        <li>The charges are per seat.</li>
                                        <li>Partial cancellation is not allowed on tickets booked under special discounted fares.</li>
                                        <li>In case of no-show or ticket not cancelled within the stipulated time, only statutory taxes are refundable subject to Service Fee.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Modal> : null}
        </>
    );
}

export default BookingModel;
