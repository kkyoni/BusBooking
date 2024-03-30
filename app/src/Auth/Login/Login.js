import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LoginActionHandler } from '../../Redux/Actions/common/Login';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Index from '../Index';
import { LockOutlined } from '@ant-design/icons';

function Login() {
    const mainLogo = '/assets/QA_Logo.svg';
    let dispatch = useDispatch();
    let Navigate = useNavigate();

    const logindata = useSelector((state) => state?.LoginData?.login_data);

    const onFinish = (values) => {
        dispatch(LoginActionHandler(values));
    };
    useEffect(() => {
        if (logindata) {
            localStorage.setItem('token', logindata.token);
            localStorage.setItem('userDetails', JSON.stringify(logindata.user));
            Navigate('/');
        }
    }, [logindata]);
    return (
<>
            <div className='login-container'>
                <Index />
                {/* {contextHolder} */}
                <div className='login-main auth-custom-scrollbar'>
                    <div className='login-div '>
                        <div className='center-img'>
                            <img
                                src={mainLogo}
                                alt=''
                                className='centered-image'
                            />
                        </div>

                        <p className='back_text'>Welcome Back!</p>
                        <p className='login_text-h'>Log in to your account</p>

                        <Form
                            name='loginForm'
                            initialValues={{ email: '', password: '' }}
                            onFinish={onFinish}
                            className='login-class-form'>
                            <label>Your email</label>
                            <Form.Item
                                name='email'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                    {
                                        type: 'email',
                                        message:
                                            'Please enter a valid email address',
                                    },
                                ]}>
                                <Input placeholder='Enter your email' />
                            </Form.Item>

                            <label>Password</label>
                            <Form.Item
                                name='password'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                    {
                                        min: 8,
                                        message:
                                            'Password must be at least 8 characters long',
                                    },
                                ]}>
                                <Input.Password placeholder='Enter your password' />
                            </Form.Item>

                            <Form.Item>
                                <Form.Item
                                    name='remember'
                                    valuePropName='checked'
                                    noStyle>
                                    <Checkbox className='mylogin-checked'>
                                        Keep me signed in
                                    </Checkbox>
                                </Form.Item>

                                <Link
                                    to='/forgotPassword'
                                    style={{
                                        float: 'right',
                                        color: '#ee3e38',
                                    }}>
                                    <LockOutlined
                                        style={{
                                            color: 'red',
                                            marginRight: '8px',
                                        }}
                                    />
                                    Forgot password
                                </Link>
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    block
                                    className='submit_login-btn'>
                                    Login
                                </Button>
                            </Form.Item>

                            <div className='first-time_div'>
                                Signing in for the first time?{' '}
                                <Link to='/signup'>
                                    <span>Click Here</span>
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
