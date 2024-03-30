import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import AddNewCardModel from './AddNewCardModel/AddNewCardModel';
import { useDispatch, useSelector } from 'react-redux';
import { UserCardListActionHandler } from '../../../../Redux/Actions/user/UserCardList';
import { UserCardDeleteActionHandler } from '../../../../Redux/Actions/user/UserCardDelete';
import { FaEdit } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

function CreditDebitCardsTab({ selectedTabItem,handleTabItemClick }) {
    let dispatch = useDispatch();
    let Navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();
    const [selectedItem, setSelectedItem] = useState(false);
    const handleAddNewCardModelClick = () => {
        setSelectedItem(!selectedItem)
    }
    const userCardListData = useSelector((state) => state.UserCardListData?.user_card_list_data);
    const userCardDeleteData = useSelector((state) => state.UserCardDeleteData?.user_card_delete_data);
    useEffect(() => {
        dispatch(UserCardListActionHandler());
    }, []);
    const openNotificationWithIcon = (type) => {
        api[type]({
            message: userCardDeleteData?.message,
        });
    };
    useEffect(() => {
        if (userCardDeleteData?.message) {
            openNotificationWithIcon("success");
            handleTabItemClick(selectedTabItem)
            dispatch(UserCardListActionHandler());
        }
    }, [userCardDeleteData]);

    const handleEditCard = (cardId) => {

    }
    const handleDeleteCard = (cardId) => {
        dispatch(UserCardDeleteActionHandler(cardId));
    }
    return (
        <>
            {contextHolder}
            <h4 className="mb-4">Credit or Debit Cards</h4>
            <hr className="mx-n4 mb-4" />
            <div className="row g-4">
                {userCardListData.length > 0 && userCardListData.map((userCardList) => (
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className={userCardList.card_type === "Visa" ? "account-card account-card-primary text-white rounded p-3" : "account-card text-white rounded p-3"} >
                            <p className="text-4">XXXX-XXXX-XXXX-{userCardList.card_number.toString().slice(-4)}</p>
                            <p className="d-flex align-items-center">
                                <span className="account-card-expire text-uppercase d-inline-block opacity-6 me-2">Valid<br />thru<br /></span>
                                <span className="text-4 opacity-9">{userCardList.expiry_date}</span>
                                <span className="bg-white text-0 text-body fw-500 rounded-pill d-inline-block px-2 lh-base opacity-8 ms-auto">Primary</span>
                            </p>
                            <p className="d-flex align-items-center m-0">
                                <span className="text-uppercase fw-500">{userCardList.card_holder_name}</span>
                                {userCardList.card_type === "Visa" ? <img className="ms-auto" src="images/visa.png" alt="visa" title="" /> : null}
                                {userCardList.card_type === "MasterCard" ? <img className="ms-auto" src="images/mastercard.png" alt="visa" title="" /> : null}
                                {userCardList.card_type === "American Express" ? <img className="ms-auto" src="images/american.png" alt="visa" title="" /> : null}
                                {userCardList.card_type === "Discover" ? <img className="ms-auto" src="images/discover.png" alt="visa" title="" /> : null}
                            </p>
                            <div className="account-card-overlay rounded">
                                <div className="text-light btn-link mx-2" onClick={(e) => handleEditCard(userCardList.id)}>
                                    <span className="me-1"><FaEdit /></span>Edit
                                </div>
                                <div className="text-light btn-link mx-2" onClick={(e) => handleDeleteCard(userCardList.id)}>
                                    <span className="me-1"><IoIosRemoveCircle /></span>Remove
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="account-card-new d-flex align-items-center rounded h-100 p-3 mb-4 mb-lg-0" onClick={() => handleAddNewCardModelClick()}>
                        <p className="w-100 text-center lh-base py-3 my-4">
                            <span className="text-3"><FaPlusCircle /></span>
                            <span className="d-block text-body text-3">Add New Card</span>
                        </p>
                    </div>
                </div>
            </div>
            {selectedItem ? <AddNewCardModel selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : null}
        </>
    );
}

export default CreditDebitCardsTab;
