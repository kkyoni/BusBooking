import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserProfileUpdateActionHandler } from '../../../../Redux/Actions/user/UserProfileUpdate';
function InformationTab() {
    let dispatch = useDispatch();
    const [form] = Form.useForm();
    const userProfileData = useSelector((state) => state.UserProfileData?.user_profile_data?.user);
    const userProfileUpdateData = useSelector((state) => state.UserProfileUpdateData?.user_profile_update_data?.user);
    const onFinish = (values) => {
        dispatch(UserProfileUpdateActionHandler(values));
    };
    useEffect(() => {
        if (userProfileData) {
            const { name, email } = userProfileData;
            form.setFieldsValue({
                name: name,
                email: email,
            });
        }
    }, [userProfileData]);
    return (
        <>
            <h4 className="mb-4">Personal Information</h4>
            <hr className="mx-n4 mb-4" />
            <div className="row">
                <div className="col-lg-8">
                    <Form form={form} initialValues={{ name: '', email: '' }} onFinish={onFinish} id="personalInformation">
                        <div className="mb-3">
                            <label className="form-label" for="fullName">Name</label>
                            <Form.Item
                                name='name'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    }
                                ]}>
                                <Input placeholder='Name' className="form-control" id="fullName" />
                            </Form.Item>
                        </div>
                        {/* <div className="mb-3">
                            <label className="form-label" for="mobileNumber">Mobile Number</label>
                            <input type="text" value="9898989898" className="form-control" data-bv-field="mobilenumber" id="mobileNumber" required placeholder="Mobile Number" />
                        </div> */}
                        <div className="mb-3">
                            <label className="form-label" for="emailID">Email ID</label>
                            <Form.Item
                                name='email'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    }
                                ]}>
                                <Input placeholder='Email ID' className="form-control" id="emailID" />
                            </Form.Item>
                        </div>
                        {/* <div className="mb-3">
                            <label className="form-label" for="birthDate">Date of Birth</label>
                            <input id="birthDate" value="06-09-2002" type="text" className="form-control" required placeholder="Date of Birth" />
                        </div> */}
                        <Form.Item>
                            <Button type='primary' htmlType='submit' block className='btn btn-primary' style={{ width: '179px', height: '50px' }}> Update Now </Button>
                        </Form.Item>
                        {/* <button className="btn btn-primary" type="submit">Update Now</button> */}
                    </Form>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0 ">
                    <div className="bg-light-2 rounded p-4">
                        <h3 className="text-4 mb-2">We value your Privacy</h3>
                        <p className="mb-0">We will not sell or distribute your contact information. Read our <Link to={'/'}>Privacy Policy</Link>.</p>
                        <hr className="mx-n4" />
                        <h3 className="text-4 mb-3">Billing Enquiries</h3>
                        <p className="mb-0">Do not hesitate to reach our <Link to={'/'}>support team</Link> if you have any queries.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InformationTab;
