import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LoginActionHandler } from '../../Redux/Actions/common/Login';
import { useNavigate } from 'react-router-dom';
import Index from '../Index';

function Login() {
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
            <div id="content">
                <Index />
                <div class="container pt-5 pb-4">
                    <div class="row">
                        <div class="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <div class="bg-white shadow-md rounded p-3 pt-sm-4 pb-sm-5 px-sm-5">
                                <p class="text-4 fw-300 text-muted text-center mb-4">Login</p>
                                <Form name='loginForm' initialValues={{ email: '', password: '' }} onFinish={onFinish} className='login-class-form'>
                                    <div class="mb-3">
                                        <Form.Item name='email' rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email address' }]}>
                                            <Input placeholder='Enter your email' class="form-control" id="emailAddress" style={{ padding: '0.810rem 0.96rem' }} />
                                        </Form.Item>
                                    </div>
                                    <div class="mb-3">
                                        <Form.Item name='password' rules={[{ required: true, message: 'Please enter your password!' }, { min: 8, message: 'Password must be at least 8 characters long' }]}>
                                            <Input.Password placeholder='Enter your password' class="form-control" id="loginPassword" style={{ padding: '0.810rem 0.96rem' }} />
                                        </Form.Item>
                                    </div>
                                    <div class="row my-4">
                                        <div class="col">
                                            <div class="form-check text-3">
                                                <Form.Item>
                                                    <Form.Item name='remember' valuePropName='checked' noStyle>
                                                        <Checkbox id="remember-me" className='form-check-input' />
                                                        <label class="form-check-label text-2" for="remember-me">Remember Me</label>
                                                    </Form.Item>
                                                    {/* <div class="col text-2 text-end">
                                                        <Link to='/forgotPassword' class="btn-link">Forgot password ?</Link>
                                                    </div> */}
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-grid my-4">
                                        <Form.Item>
                                            <Button type='primary' htmlType='submit' block className='btn btn-primary' style={{ height: '50px' }}>Login</Button>
                                        </Form.Item>
                                    </div>
                                </Form>
                                {/* <div class="d-flex align-items-center my-3">
                                    <hr class="flex-grow-1" />
                                    <span class="mx-2 text-2 text-muted">Or Login with Social Profile</span>
                                    <hr class="flex-grow-1" />
                                </div> */}
                                {/* <div class="d-flex  flex-column align-items-center mb-3">
                                    <ul class="social-icons social-icons-colored social-icons-circle">
                                        <li class="social-icons-facebook"><a href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Log In with Facebook" aria-label="Log In with Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                        <li class="social-icons-twitter"><a href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Log In with Twitter" aria-label="Log In with Twitter"><i class="fab fa-twitter"></i></a></li>
                                        <li class="social-icons-google"><a href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Log In with Google" aria-label="Log In with Google"><i class="fab fa-google"></i></a></li>
                                        <li class="social-icons-linkedin"><a href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Log In with Linkedin" aria-label="Log In with Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div> */}
                                {/* <p class="text-2 text-center mb-0">New to Quickai? <a class="btn-link" href="signup.html">Sign Up</a></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
