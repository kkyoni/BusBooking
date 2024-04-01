import React from 'react';
import { Tabs } from 'antd';
import CreditDebitCards from './CreditDebitCards/CreditDebitCards';
import PayPal from './PayPal/PayPal';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;
function Payment() {
    return (
        <>
            <section className="page-header page-header-dark bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Payment</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active">Payment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div className="container">
                    <div className="bg-white shadow-md rounded">
                        <div className="row align-items-center p-4">
                            <div className="col-md-6">
                                <h2 className="text-primary d-flex align-items-center m-0"><span className="text-3 text-dark me-1">Total Payable Amount: </span> $150</h2>
                            </div>
                            <div className="col-md-6">
                                <p className="text-md-end pb-0 mb-0">Transaction ID: <span className="text-body">25246584</span></p>
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div className="p-4">
                            <h3 className="text-6 mb-4">How would you like to pay?</h3>
                            <div className="row">
                                <Tabs tabPosition={'left'} type="card">
                                    {new Array(2).fill(null).map((_, i) => {
                                        const id = String(i + 1);
                                        return (
                                            <TabPane tab={id === '1' ? "Credit/Debit Cards" : "PayPal"} key={id}>
                                                {id === '1' ? <CreditDebitCards /> : <PayPal />}
                                            </TabPane>
                                        );
                                    })}
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;
