import React, { useState } from 'react';
import { Modal } from 'antd';

function BusConfirmModel({ selectedItem, setSelectedItem }) {
    const MenuItem = ['Cancellation Fee', 'Baggage Details'];
    const [selectedTabItem, setSelectedTabItem] = useState(0);

    return (
        <>
            {selectedItem ? <Modal title="Fare Rules" open={selectedItem} onCancel={() => setSelectedItem(false)} width={1000}>
                <div className="modal-body">
                    <div className="bus-details">
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
                                    <div className="table-responsive-md">
                                        <table className="table table-hover table-bordered">
                                            <thead>
                                                <tr>
                                                    <td>Hours before Departure</td>
                                                    <td className="text-center">Refund Percentage</td>
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
                                        <p className="fw-bold">Terms &amp; Conditions</p>
                                        <ul>
                                            <li>The penalty is subject to 24 hrs before departure. No Changes are allowed after that.</li>
                                            <li>The charges are per seat.</li>
                                            <li>Partial cancellation is not allowed on tickets booked under special discounted fares.</li>
                                            <li>In case of no-show or ticket not cancelled within the stipulated time, only statutory taxes are refundable subject to Service Fee.</li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="tab-pane fade show active">
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <td className="text-center">Per Seat</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Adult</td>
                                                <td className="text-center">5 Kg</td>
                                            </tr>
                                            <tr>
                                                <td>Child</td>
                                                <td className="text-center">5 Kg</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Modal> : null}
        </>
    );
}

export default BusConfirmModel;
