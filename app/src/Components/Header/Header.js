import React, { useEffect } from 'react';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UserProfileActionHandler } from '../../Redux/Actions/user/UserProfile';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
function Header() {
    const Logo = '/images/logo.png';
    let dispatch = useDispatch();
    let Navigate = useNavigate();
    const userProfileData = useSelector((state) => state.UserProfileData?.user_profile_data?.user);
    const items = [
        { key: '1', label: (<Link to={"/"}>About Us</Link>), },
        { key: '2', label: (<Link to={"/"}>Help</Link>), },
        { key: '3', label: (<Link to={"/"}>Faq</Link>), },
        { key: '4', label: (<Link to={"/"}>Support</Link>), },
        { key: '5', label: (<Link to={"/"}>Contact Us</Link>), },
    ]

    useEffect(() => {
        const handleDropdown = () => {
            if (window.innerWidth > 991) {
                $('.primary-menu ul.navbar-nav li.dropdown, .login-signup ul.navbar-nav li.dropdown').on("mouseover", function () {
                    console.log("Dropdown show on hover")
                    $(this).find('> .dropdown-menu').stop().slideDown('fast');
                    $(this).bind('mouseleave', function () {
                        $(this).find('> .dropdown-menu').stop().css('display', 'none');
                    });

                    // When dropdown going off to the out of the screen.
                    $('.primary-menu ul.navbar-nav > li.dropdown > .dropdown-menu').each(function () {
                        var menu = $('#header .header-row').offset();
                        var dropdown = $(this).parent().offset();
                        var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#header .header-row').outerWidth());
                        if (i > 0) {
                            if ($("html").attr("dir") === 'rtl') {
                                $(this).css('margin-right', '-' + (i) + 'px');
                            } else {
                                $(this).css('margin-left', '-' + (i) + 'px');
                            }
                        }
                    });
                });
            }
        };

        const handleDropdownMenuPosition = () => {
            $(".dropdown li").on('mouseenter mouseleave', function (e) {
                console.log("mouseenter mouseleave");
                if (window.innerWidth > 991) {
                    if ($('.dropdown-menu', this).length) {
                        var elm = $('.dropdown-menu', this);
                        var off = elm.offset();
                        var l = off.left;
                        var w = elm.width();
                        var docW = $(window).width();
                        var lr = ($(window).width() - (off.left + elm.outerWidth())); //offset right
                        var isEntirelyVisible = ($("html").attr("dir") === 'rtl') ? (lr + w + 30 <= docW) : (l + w + 30 <= docW);
                        if (!isEntirelyVisible) {
                            $(elm).addClass('dropdown-menu-end');
                            $(elm).parents('.dropdown:first').find('> a.dropdown-toggle > .arrow').addClass('arrow-end');
                        } else {
                            $(elm).removeClass('dropdown-menu-end');
                            $(elm).parents('.dropdown:first').find('> a.dropdown-toggle > .arrow').removeClass('arrow-end');
                        }
                    }
                }
            });
        };

        handleDropdown();
        handleDropdownMenuPosition();

        return () => {
            $('.primary-menu ul.navbar-nav li.dropdown, .login-signup ul.navbar-nav li.dropdown').off("mouseover");
            $(".dropdown li").off('mouseenter mouseleave');
        };
    }, []);
    const logoutHandler = () => {
        try {
            localStorage.clear();
            Navigate('/login');
            window.location.reload();
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    };
    useEffect(() => {
        dispatch(UserProfileActionHandler());
    }, []);
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header-row">
                        <div className="header-column justify-content-start">
                            <div className="logo me-2 me-lg-3"> <Link to={"/"} className="d-flex" title="Quickai - HTML Template"><img src={Logo} alt="Quickai" /></Link> </div>
                        </div>
                        <div className="header-column justify-content-end">
                            <nav className="primary-menu navbar navbar-expand-lg">
                                <div id="header-nav" className="collapse navbar-collapse">
                                    <Dropdown menu={{ items }}>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>Pages<DownOutlined /></Space>
                                        </a>
                                    </Dropdown>
                                </div>
                            </nav>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
                            <div className="vr mx-2 h-25 my-auto"></div>
                            <nav className="login-signup navbar navbar-expand">
                                <ul className="navbar-nav">
                                    <li className="profile dropdown active">
                                        <a className="pe-0 dropdown-toggle" href="#" title="My Profile">
                                            <span className="d-none d-sm-inline-block">My Profile</span>
                                            <span className="user-icon ms-sm-2">
                                                <img src={`http://127.0.0.1:8000${userProfileData?.avatar}`} style={{ height: '36px', width: '36px', borderRadius: '50%' }} />
                                            </span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="text-center text-3 py-2">Hi, {userProfileData?.name}</li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><Link className="dropdown-item" to={"profile"}><i className="fas fa-user"></i>Personal Information</Link></li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><a className="dropdown-item" href="help.html"><i className="fas fa-life-ring"></i>Need Help?</a></li>
                                            <li><a className="dropdown-item" href="#" onClick={logoutHandler}><i className="fas fa-sign-out-alt"></i>Log Out</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
