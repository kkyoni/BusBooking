import React, { useState } from 'react';
import InformationTab from './Tab/InformationTab/InformationTab';
import FavouritesTab from './Tab/FavouritesTab/FavouritesTab';
import OrdersHistoryTab from './Tab/OrdersHistoryTab/OrdersHistoryTab';
import CreditDebitCardsTab from './Tab/CreditDebitCardsTab/CreditDebitCardsTab';
import ChangePasswordTab from './Tab/ChangePasswordTab/ChangePasswordTab';
import NotificationsTab from './Tab/NotificationsTab/NotificationsTab';
import { Link } from 'react-router-dom';
function Profile() {
    const MenuItem = ['Personal Information', 'Orders History', 'Credit or Debit Cards', 'Change Password', 'Notifications'];
    const [selectedTabItem, setSelectedTabItem] = useState(0);
    const handleTabItemClick = (item) => {
        console.log("asdfsdf", item);
        setSelectedTabItem(item)
    }
    return (
        <>
            <section className="page-header page-header-dark bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>My Profile</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active">My Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="nav nav-pills alternate flex-lg-column mb-3 mb-lg-0 sticky-top">
                                {MenuItem.map((item, index) => (
                                    <li className="nav-item">
                                        <div key={index} className={index === selectedTabItem ? 'nav-link active' : 'nav-link'} onClick={() => handleTabItemClick(index)}>
                                            {item}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-9">
                            <div className="bg-white shadow-md rounded p-4">
                                {selectedTabItem === 0 ? <InformationTab /> : null}
                                {selectedTabItem === 1 ? <OrdersHistoryTab selectedTabItem={selectedTabItem} handleTabItemClick={handleTabItemClick} /> : null}
                                {selectedTabItem === 2 ? <CreditDebitCardsTab selectedTabItem={selectedTabItem} handleTabItemClick={handleTabItemClick} /> : null}
                                {selectedTabItem === 3 ? <ChangePasswordTab /> : null}
                                {selectedTabItem === 4 ? <NotificationsTab /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
