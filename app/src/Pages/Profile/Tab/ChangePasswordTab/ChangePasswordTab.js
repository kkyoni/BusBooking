import React, { useState, useEffect } from 'react';
function ChangePasswordTab() {
    return (
        <>
            <h4 className="mb-4">Change Password</h4>
            <hr className="mx-n4 mb-4" />
            <div className="row g-4">
                <div className="col-lg-8">
                    <form id="changePassword" method="post">
                        <div className="mb-3">
                            <label className="form-label" for="existingPassword">Existing Password</label>
                            <input type="text" className="form-control" data-bv-field="existingpassword" id="existingPassword" required placeholder="Existing Password" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="newPassword">New Password</label>
                            <input type="text" className="form-control" data-bv-field="newpassword" id="newPassword" required placeholder="New Password" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="existingPassword">Confirm Password</label>
                            <input type="text" className="form-control" data-bv-field="confirmgpassword" id="confirmPassword" required placeholder="Confirm Password" />
                        </div>
                        <button className="btn btn-primary" type="submit">Update Password</button>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="bg-light-2 rounded p-4">
                        <h3 className="text-4 mb-2">We value your Privacy</h3>
                        <p className="mb-0">We will not sell or distribute your contact information. Read our <a href="#">Privacy Policy</a>.</p>
                        <hr className="mx-n4" />
                        <h3 className="text-4 mb-3">Billing Enquiries</h3>
                        <p className="mb-0">Do not hesitate to reach our <a href="#">support team</a> if you have any queries.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChangePasswordTab;
