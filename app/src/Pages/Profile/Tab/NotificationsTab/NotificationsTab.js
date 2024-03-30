import React, { useState, useEffect } from 'react';
function NotificationsTab() {
    return (
        <>
            <h4 className="mb-1">Notifications</h4>
            <p className="lead text-3 text-muted">Select subscriptions to be delivered to your register Email Id.</p>
            <hr className="mx-n4 mb-4" />
            <form id="notifications" method="post">
                <div className="form-check form-switch form-check-inline text-4">
                    <input id="announcements" name="notifications" className="form-check-input" checked="" type="checkbox" />
                    <label className="form-check-label text-dark" for="announcements">Announcements</label>
                    <p className="text-2 text-muted lh-base mt-2 mb-0">Be the first to know about new features and other news.</p>
                </div>
                <hr className="mx-n4" />
                <div className="form-check form-switch form-check-inline text-4">
                    <input id="sendPayment" name="notifications" className="form-check-input" checked="" type="checkbox" />
                    <label className="form-check-label text-dark" for="sendPayment">Mobile Recharge</label>
                    <p className="text-2 text-muted lh-base mt-2 mb-0">Send an email when I send a topup.</p>
                </div>
                <hr className="mx-n4" />
                <div className="form-check form-switch form-check-inline text-4">
                    <input id="receiveApayment" name="notifications" className="form-check-input" type="checkbox" />
                    <label className="form-check-label text-dark" for="receiveApayment">Bill Payment</label>
                    <p className="text-2 text-muted lh-base mt-2 mb-0">Send me an email when our bill payment successfully.</p>
                </div>
                <hr className="mx-n4" />
                <div className="form-check form-switch form-check-inline text-4">
                    <input id="requestPayment" name="notifications" className="form-check-input" checked="" type="checkbox" />
                    <label className="form-check-label text-dark" for="requestPayment">Booking</label>
                    <p className="text-2 text-muted lh-base mt-2 mb-0">Send me an email when your booking confirmed.</p>
                </div>
                <hr className="mx-n4" />
                <div className="form-check form-switch form-check-inline text-4">
                    <input id="problemWithPayment" name="notifications" className="form-check-input" type="checkbox" />
                    <label className="form-check-label text-dark" for="problemWithPayment">Have a problem with a payment</label>
                    <p className="text-2 text-muted lh-base mt-2 mb-0">Send me an email when have a problem with a payment.</p>
                </div>
                <hr className="mx-n4" />
                <div className="form-check form-switch form-check-inline text-4">
                    <input id="specialOffers" name="notifications" className="form-check-input" type="checkbox" />
                    <label className="form-check-label text-dark" for="specialOffers">Special Offers</label>
                    <p className="text-2 text-muted lh-base mt-2 mb-0">Receive last-minute offers from us.</p>
                </div>
                <hr className="mx-n4" />
                <div className="form-check form-switch form-check-inline text-4">
                    <input id="reviewSurveys" name="notifications" className="form-check-input" type="checkbox" />
                    <label className="form-check-label text-dark" for="reviewSurveys">Review Surveys</label>
                    <p className="text-2 text-muted lh-base mt-2 mb-0">Share your payment experience to better inform users.</p>
                </div>
                <hr className="mx-n4" />
                <button className="btn btn-primary mt-1" type="submit">Save Changes</button>
            </form>
        </>
    );
}

export default NotificationsTab;
