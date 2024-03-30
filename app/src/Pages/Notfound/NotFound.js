import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
function NotFound() {
    return (
        <>
            <section className="page-header page-header-dark bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>404 - Page not found</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">404 - Page Not Found</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <section className="section">
                    <div className="container text-center">
                        <h2 className="text-25 fw-600 mb-0">404</h2>
                        <h3 className="text-6 fw-600 mb-3">oops! The page you requested was not found!</h3>
                        <p className="text-3 text-muted">The page you are looking for was moved, removed, renamed or might never existed.</p>
                        <a href="#" className="btn btn-primary shadow-none px-5 m-2">Home</a> <a href="#" className="btn btn-outline-dark shadow-none px-5 m-2">Back</a> </div>
                </section>
            </div>
        </>

    );
}

export default NotFound;
