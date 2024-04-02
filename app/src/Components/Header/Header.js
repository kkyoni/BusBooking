import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UserProfileActionHandler } from '../../Redux/Actions/user/UserProfile';
import { Menu } from 'antd';

function Header() {
    const Logo = '/images/logo.png';
    let dispatch = useDispatch();
    let Navigate = useNavigate();
    const userProfileData = useSelector((state) => state.UserProfileData?.user_profile_data?.user);
    const item = [
        {
            label: 'Pages',
            key: 'SubMenu',
            children: [
                { key: '1', label: (<Link to={"/About-Us"}>About Us</Link>), },
                { key: '2', label: (<Link to={"/Faq"}>Faq</Link>), },
                { key: '3', label: (<Link to={"/Support"}>Support</Link>), },
                { key: '4', label: (<Link to={"/Contact-us"}>Contact Us</Link>), },
            ],
        },
    ];
    const profile_menu = [
        {
            label: 'Pages',
            key: 'SubMenu',
            icon: <span className="user-icon ms-sm-2">
                <img src={`http://127.0.0.1:8000${userProfileData?.avatar}`} style={{ height: '36px', width: '36px', borderRadius: '50%' }} />
            </span>,
            children: [
                { key: '1', label: `Hi, ${userProfileData?.name}` },
                { key: '2', label: (<Link to={"/profile"}>Personal Information</Link>) },
                { key: '3', label: (<Link to={"/Help"}>Need Help?</Link>), },
                { key: '4', label: (<Link onClick={() => logoutHandler()}>Log Out</Link>), },
            ],
        },
    ];

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
                                    <Menu mode="horizontal" items={item} />
                                </div>
                            </nav>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>
                            <div className="vr mx-2 h-25 my-auto"></div>
                            <nav className="login-signup navbar navbar-expand">
                                <ul className="navbar-nav">
                                    <li className="profile dropdown active">
                                        <a className="pe-0 dropdown-toggle" href="#" title="My Profile">
                                            <Menu className="d-none d-sm-inline-block" mode="horizontal" items={profile_menu} />
                                        </a>
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
