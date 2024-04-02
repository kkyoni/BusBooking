import React, { useEffect } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserChangePasswordActionHandler } from '../../../../Redux/Actions/user/UserChangePassword';
import { useDispatch, useSelector } from 'react-redux';
function ChangePasswordTab() {
    let dispatch = useDispatch();
    const [api, contextHolder] = notification.useNotification();
    const userChangePasswordData = useSelector((state) => state.UserChangePasswordData?.user_change_password_data);
    const openNotificationWithIcon = (type) => {
        api[type]({
            message: userChangePasswordData?.message,
        });
    };
    const onFinish = (values) => {
        dispatch(UserChangePasswordActionHandler(values));
    };
    useEffect(() => {
        if (userChangePasswordData?.message) {
            openNotificationWithIcon("success");
        }
    }, [userChangePasswordData]);
    return (
        <>
            {contextHolder}
            <h4 className="mb-4">Change Password</h4>
            <hr className="mx-n4 mb-4" />
            <div className="row g-4">
                <div className="col-lg-12">
                    <Form initialValues={{ old_password: '', new_password: '' }} onFinish={onFinish} id="changePassword">
                        <div className="mb-3">
                            <label className="form-label" for="existingPassword">Old Password</label>
                            <Form.Item name='old_password' rules={[{ required: true, message: 'Please input your Old Password!' }]}>
                                <Input placeholder='Old Password' className="form-control" id="existingPassword" />
                            </Form.Item>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="newPassword">New Password</label>
                            <Form.Item name='new_password' rules={[{ required: true, message: 'Please input your New Password!' }]}>
                                <Input placeholder='New Password' className="form-control" id="newPassword" />
                            </Form.Item>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="existingPassword">Confirm Password</label>
                            <Form.Item name='confirm_password' rules={[{ required: true, message: 'Please input your Confirm Password!' }]}>
                                <Input placeholder='Confirm Password' className="form-control" id="confirmPassword" />
                            </Form.Item>
                        </div>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' block className='btn btn-primary' style={{ width: '208px', height: '50px' }}> Update Password </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default ChangePasswordTab;
