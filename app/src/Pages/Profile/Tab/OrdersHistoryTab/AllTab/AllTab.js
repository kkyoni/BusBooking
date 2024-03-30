import React, { useState, useEffect } from 'react';
function AllTab() {
    return (
        <>
            <div className="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
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
                                <td className="align-middle">06/06/2018</td>
                                <td className="align-middle"><img src="images/vodafone.jpg" className="img-thumbnail d-inline-flex me-1" /> <span className="text-1 d-inline-flex">Recharge of Vodafone Mobile 9696969696</span></td>
                                <td className="align-middle">5286977475</td>
                                <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-success" data-bs-toggle="tooltip" title="Your order is Successful"></i></td>
                                <td className="align-middle text-end">$150</td>
                                <td className="align-middle text-center"><a href="#" data-bs-toggle="tooltip" title="Repeat Order"><i className="fas fa-redo-alt"></i></a></td>
                            </tr>
                            <tr>
                                <td className="align-middle">02/06/2018</td>
                                <td className="align-middle"><img src="images/indigo.png" className="img-thumbnail d-inline-flex me-1" /> <span className="text-1 d-inline-flex">Booking of Delhi to Sydney flight</span></td>
                                <td className="align-middle">5136907172</td>
                                <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-success" data-bs-toggle="tooltip" title="Your order is Successful"></i></td>
                                <td className="align-middle text-end">$980</td>
                                <td className="align-middle text-center"><a href="#" data-bs-toggle="tooltip" title="Repeat Order"><i className="fas fa-redo-alt"></i></a></td>
                            </tr>
                            <tr>
                                <td className="align-middle">31/05/2018</td>
                                <td className="align-middle"><img src="images/vodafone.jpg" className="img-thumbnail d-inline-flex me-1" /> <span className="text-1 d-inline-flex">Bill Payment of Vodafone Mobile 9898989898</span></td>
                                <td className="align-middle">1072317951</td>
                                <td className="align-middle text-center"><i className="fas fa-ellipsis-h text-4 text-info" data-bs-toggle="tooltip" title="Your order is in Progress"></i></td>
                                <td className="align-middle text-end">$99</td>
                                <td className="align-middle text-center"></td>
                            </tr>
                            <tr>
                                <td className="align-middle">25/05/2018</td>
                                <td><div className="d-lg-flex align-items-center"> <span className="img-thumbnail d-inline-flex text-8 p-2 me-2"><i className="fas fa-bus"></i></span> <span className="text-1 d-inline-flex">Booking of Mumbai to Surat Bus</span> </div></td>
                                <td className="align-middle">4103520927</td>
                                <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-success" data-bs-toggle="tooltip" title="Your order is Successful"></i></td>
                                <td className="align-middle text-end">$450</td>
                                <td className="align-middle text-center"><a href="#" data-bs-toggle="tooltip" title="Repeat Order"><i className="fas fa-redo-alt"></i></a></td>
                            </tr>
                            <tr>
                                <td className="align-middle">21/05/2018</td>
                                <td className="align-middle"><img src="images/vodafone.jpg" className="img-thumbnail d-inline-flex me-1" /> <span className="text-1 d-inline-flex">Recharge of Vodafone Mobile 9898989898</span></td>
                                <td className="align-middle">3079317986</td>
                                <td className="align-middle text-center"><i className="fas fa-times-circle text-4 text-danger" data-bs-toggle="tooltip" title="Your order is Failed"></i></td>
                                <td className="align-middle text-end">$280</td>
                                <td className="align-middle text-center"><a href="#" data-bs-toggle="tooltip" title="Retry Order"><i className="fas fa-redo-alt "></i></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-center pt-3"><a href="#" className="btn btn-outline-primary shadow-none">View More</a></div>
            </div>
        </>
    );
}

export default AllTab;