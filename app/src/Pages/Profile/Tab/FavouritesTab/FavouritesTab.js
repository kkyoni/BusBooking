import React, { useState, useEffect } from 'react';
function FavouritesTab() {
    return (
        <>
            <h4 className="mb-4">Your Saved Connections</h4>
            <hr className="mx-n4 mb-4" />
            <div className="table-responsive-lg">
                <table className="table table-hover border">
                    <tbody>
                        <tr>
                            <td className="text-center align-middle"><img className="border p-1 rounded bg-white" src="images/vodafone.jpg" alt="" /></td>
                            <td className="text-center align-middle">9898989898</td>
                            <td className="text-center align-middle">Vodafone</td>
                            <td className="align-middle"><div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button>
                                <button className="btn btn-sm btn-outline-secondary shadow-none ms-1" type="submit" data-bs-toggle="tooltip" title="Edit"><i className="fas fa-edit"></i></button>
                            </div></td>
                        </tr>
                        <tr>
                            <td className="text-center align-middle"><img className="border p-1 rounded bg-white" alt="" src="images/vodafone.jpg" /></td>
                            <td className="text-center align-middle">9696969696</td>
                            <td className="text-center align-middle">Vodafone</td>
                            <td className="align-middle"><div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button>
                                <button className="btn btn-sm btn-outline-secondary shadow-none ms-1" type="submit" data-bs-toggle="tooltip" title="Edit"><i className="fas fa-edit"></i></button>
                            </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FavouritesTab;
