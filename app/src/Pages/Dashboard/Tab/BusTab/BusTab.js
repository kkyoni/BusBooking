import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function BusTab() {
    let Navigate = useNavigate();

    const onSearchBus = (values) => {
        Navigate(`/buslist/${values.from}/${values.to}`);
    };
    return (
        <>
            <h2 className="resp-accordion resp-tab-active" role="tab" aria-controls="tab_item-3">
                <i className="resp-arrow"></i><span><i className="fas fa-bus"></i></span>Bus
            </h2>
            <div className="resp-tab-content-active" aria-labelledby="tab_item-3">
                <h2 className="fw-600 mb-4">Search Bus</h2>
                <Form initialValues={{ from: '', to: '', busdepart: '' }} onFinish={onSearchBus} id="bookingBus">
                    <div className="row g-3">
                        <div className="col-lg-6">
                            <label for="busFrom" className="form-label">From</label>
                            <div className="position-relative">
                                <Form.Item name='from' rules={[{ required: true, message: 'Please input your From!' }]}>
                                    <Input className="form-control ui-autocomplete-input" id="busFrom" placeholder='From' autocomplete="off" />
                                </Form.Item>
                                <span className="icon-inside"><FaMapMarkerAlt /></span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <label for="busTo" className="form-label">To</label>
                            <div className="position-relative">
                                <Form.Item name='to' rules={[{ required: true, message: 'Please input your To!' }]}>
                                    <Input className="form-control ui-autocomplete-input" id="busFrom" placeholder='To' autocomplete="off" />
                                </Form.Item>
                                <span className="icon-inside"><FaMapMarkerAlt /></span>
                            </div>
                        </div>
                        <div className="col-12">
                            <label for="busDepart" className="form-label">Depart On</label>
                            <div className="position-relative">
                                <Form.Item name='busdepart' rules={[{ required: true, message: 'Please input your To!' }]}>
                                    <DatePicker className="form-control" id="busDepart" placeholder='Depart Date' autocomplete="off" />
                                </Form.Item>
                                <span className="icon-inside">
                                    <i className="far fa-calendar-alt"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="d-grid mt-4">
                        <Form.Item>
                            <Button type='primary' htmlType='submit' block className='btn btn-primary' style={{ height: '50px' }}>Login</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default BusTab;
