import React, { useEffect } from 'react';
import { BusBookingOrderDetailsListActionHandler } from '../../../../../Redux/Actions/user/BusBookingOrderDetailsList';
import { useDispatch, useSelector } from 'react-redux';
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { Button } from 'antd';
function ConfirmTab() {
    let dispatch = useDispatch();
    const busbookingorderlistData = useSelector((state) => state.BusBookingOrderDetailsListData?.bus_booking_order_list_data);
    useEffect(() => {
        dispatch(BusBookingOrderDetailsListActionHandler('confirm', 1));
    }, []);
    const handleViewMore = (count) => {
        dispatch(BusBookingOrderDetailsListActionHandler('confirm', count));
    }
    return (
        <>
            <div className="tab-pane fade show active" id="third" role="tabpanel" aria-labelledby="third-tab">
                <div className="table-responsive-md">
                    <table className="table table-hover border">
                        <thead>
                            <tr>
                                <th>Invoice ID</th>
                                <th>Date</th>
                                <th>From - To</th>
                                <th className="text-center">Status</th>
                                <th className="text-end">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {busbookingorderlistData.data && busbookingorderlistData.data.map((busbookingorderlist) => (
                                <tr key={busbookingorderlist.id}>
                                    <td className="align-middle">{busbookingorderlist.invoice_id}</td>
                                    <td className="align-middle">{busbookingorderlist.booking_start_date}</td>
                                    <td className="align-middle">{busbookingorderlist.bus_list.map(bus => `${bus.from} to ${bus.to}`).join(', ')}</td>
                                    <td className="align-middle text-center">
                                        {busbookingorderlist.booking_status === 'confirm' ? <FaCircleCheck className='text-4 text-success' /> : null}
                                        {busbookingorderlist.booking_status === 'cancle' ? <FaTimesCircle className='text-4 text-danger' /> : null}
                                        {busbookingorderlist.booking_status === 'pending' ? <FaEllipsis className='text-4 text-info' /> : null}
                                    </td>
                                    <td className="align-middle text-end">${busbookingorderlist.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {busbookingorderlistData?.data?.length >= busbookingorderlistData?.count ? <div className="text-center pt-3"><Button className="btn btn-outline-primary shadow-none" disabled style={{ height: '50px' }}>View More</Button></div> : <div className="text-center pt-3"><Button className="btn btn-outline-primary shadow-none" style={{ height: '50px' }} onClick={() => handleViewMore(busbookingorderlistData?.data?.length + busbookingorderlistData?.data?.length)}>View More</Button></div>}
            </div>
        </>
    );
}

export default ConfirmTab;
