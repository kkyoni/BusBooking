import React, { useState, useEffect } from 'react';
import AllTab from './AllTab/AllTab';
import ConfirmTab from './ConfirmTab/ConfirmTab';
import PendingTab from './PendingTab/PendingTab';
function OrdersHistoryTab({ selectedTabItem, handleTabItemClick }) {
    const MenuItem = ['All', 'Pending', 'Confirm'];
    const [selectedOrderTabItem, setSelectedOrderTabItem] = useState(0);
    return (
        <>
            <h4 className="mb-4">Orders History</h4>
            <hr className="mx-n4" />
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                {MenuItem.map((item, index) => (
                    <li className="nav-item">
                        <div key={index} className={index === selectedOrderTabItem ? 'nav-link active' : 'nav-link'} onClick={() => setSelectedOrderTabItem(index)}>
                            {item}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="tab-content my-3" id="myTabContent">
                {selectedOrderTabItem === 0 ? <AllTab /> : null}
                {selectedOrderTabItem === 1 ? <PendingTab /> : null}
                {selectedOrderTabItem === 2 ? <ConfirmTab /> : null}
            </div>
        </>
    );
}

export default OrdersHistoryTab;
