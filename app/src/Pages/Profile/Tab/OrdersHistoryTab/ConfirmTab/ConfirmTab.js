import React, { useState, useEffect } from 'react';
function ConfirmTab() {
    return (
        <>
            <div className="tab-pane fade show active" id="third" role="tabpanel" aria-labelledby="third-tab">
                <div className="table-responsive-md">
                    <table className="table table-hover border">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Order ID</th>
                                <th className="text-center">Status</th>
                                <th className="text-end">Amount</th>
                                <th className="text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-middle">02/06/2018</td>
                                <td className="align-middle"><img src="images/indigo.png" className="img-thumbnail d-inline-flex me-1" /> <span className="text-1 d-inline-flex">Booking of Delhi to Sydney flight</span></td>
                                <td className="align-middle">5136907172</td>
                                <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-success" data-bs-toggle="tooltip" title="Your order is Successful"></i></td>
                                <td className="align-middle text-end">$980</td>
                                <td className="align-middle text-center"><a href="#" data-bs-toggle="tooltip" title="Repeat Order"><i className="fas fa-redo-alt"></i></a></td>
                            </tr>
                            <tr>
                                <td className="align-middle">25/05/2018</td>
                                <td><div className="d-lg-flex align-items-center"> <span className="img-thumbnail d-inline-flex text-8 p-2 me-2"><i className="fas fa-bus"></i></span> <span className="text-1 d-inline-flex">Booking of Mumbai to Surat Bus</span> </div></td>
                                <td className="align-middle">4103520927</td>
                                <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-success" data-bs-toggle="tooltip" title="Your order is Successful"></i></td>
                                <td className="align-middle text-end">$450</td>
                                <td className="align-middle text-center"><a href="#" data-bs-toggle="tooltip" title="Repeat Order"><i className="fas fa-redo-alt"></i></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ConfirmTab;
