import React, { useState, useEffect } from 'react';
import { Button, Pagination, Form, Input, DatePicker } from 'antd';
import './BusModel.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { BusViewBookingActionHandler } from '../../../Redux/Actions/user/BusViewBooking';
import { BusBookingListActionHandler } from '../../../Redux/Actions/user/BusBookingList';
import { BusTypeListActionHandler } from '../../../Redux/Actions/user/BusTypeActionList';
import { BusOperatorsListActionHandler } from '../../../Redux/Actions/user/BusOperatorsList';
import Type from '../../Filter/Type/Type';
import Price from '../../Filter/Price/Price';
import Operators from '../../Filter/Operators/Operators';
import BookingModel from './BookingModel/BookingModel';
import { FaMapMarkerAlt } from "react-icons/fa";

function BusList() {
    let dispatch = useDispatch();
    let Navigate = useNavigate();
    const parms = useParams();
    const [isFrom, setIsFrom] = useState(parms.from);
    const [isTo, setIsTo] = useState(parms.to);
    const [selectedItem, setSelectedItem] = useState(false);
    const [isBusId, setIsBusId] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    const MenuItem = ['Available Seats', 'Cancellation Fee'];
    const [selectedTabItem, setSelectedTabItem] = useState(0);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [busList, setBusList] = useState({});
    const [isSetRange, setIsRange] = useState([0, 500]);
    const [busType, setBusType] = useState([]);
    const [busOperators, setBusOperators] = useState([]);
    const handleBusBookingModelClick = (value) => {
        dispatch(BusViewBookingActionHandler(value));
        setIsBusId(value);
        setSelectedItem(!selectedItem)
    }
    const handleBusBookClick = (seatNumber, busId, price) => {
        setBusList(prevState => {
            const updatedBusList = { ...prevState };
            const seatIndex = updatedBusList[busId].seats.findIndex(seat => seat.seatNumber === seatNumber);
            if (seatIndex !== -1) {
                updatedBusList[busId].seats[seatIndex].seatBook = !updatedBusList[busId].seats[seatIndex].seatBook;
            }
            return updatedBusList;
        });

        const seat = `${busId}_${seatNumber}`;
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(prevSeats => prevSeats.filter(selectedSeat => selectedSeat !== seat));
            setTotalPrice(prevPrice => prevPrice - price);
        } else {
            setSelectedSeats(prevSeats => [...prevSeats, seat]);
            setTotalPrice(prevPrice => prevPrice + price);
        }
    };

    const busBookingListData = useSelector((state) => state.BusBookingListData?.bus_booking_list_data);
    const busViewBookingData = useSelector((state) => state.BusViewBookingData?.bus_view_booking_data);
    const busTypeData = useSelector((state) => state.BusTypeListData?.bus_type_list_data);
    const busOperatorsData = useSelector((state) => state.BusOperatorsListData?.bus_operators_list_data);
    useEffect(() => {
        if (busViewBookingData) {
            setBusList(busViewBookingData);
        }
    }, [busViewBookingData]);

    useEffect(() => {
        dispatch(BusTypeListActionHandler());
        dispatch(BusOperatorsListActionHandler());
        dispatch(BusBookingListActionHandler(isFrom, isTo, '', isSetRange, busType, busOperators));
    }, [isFrom, isTo]);

    const handlePageChange = (newPage) => {
        dispatch(BusBookingListActionHandler(isFrom, isTo, newPage, isSetRange, busType, busOperators));
    };

    const onChangeBusPrice = (price) => {
        setIsRange(price);
        dispatch(BusBookingListActionHandler(isFrom, isTo, '', price, busType, busOperators));
    };

    const onChangeBusType = (e) => {
        const value = e.target.value;
        setBusType(prevBusType => {
            const index = prevBusType.indexOf(value);
            if (index !== -1) {
                return prevBusType.filter(item => item !== value);
            } else {
                return [...prevBusType, value];
            }
        });
    };
    const onChangeBusOperators = (e) => {
        const value = e.target.value;
        setBusOperators(prevBusOperators => {
            const index = prevBusOperators.indexOf(value);
            if (index !== -1) {
                return prevBusOperators.filter(item => item !== value);
            } else {
                return [...prevBusOperators, value];
            }
        });
    };
    useEffect(() => {
        dispatch(BusBookingListActionHandler(isFrom, isTo, '', isSetRange, busType, busOperators));
    }, [busType]);
    useEffect(() => {
        dispatch(BusBookingListActionHandler(isFrom, isTo, '', isSetRange, busType, busOperators));
    }, [busOperators]);
    const onFinish = (values) => {
        console.log("values", values);
    }
    return (
        <>
            <section className="page-header page-header-dark bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Bus - List Page</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"#"}>Bus</Link></li>
                                <li className="active">Bus List Page</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <section className="container">
                    <Form name='bookingBus' initialValues={{ bus_from: '', bus_to: '', bus_depart: '' }} onFinish={onFinish} id="bookingBus">
                        <div className="row g-3 mb-4">
                            <div className="col-md-6 col-lg">
                                <div className="position-relative">
                                    <Form.Item name='bus_from' rules={[{ required: true, message: 'Please input your From!' }]}>
                                        <Input placeholder='Enter your From' className="form-control ui-autocomplete-input" id="busFrom" />
                                        <span className="icon-inside"><FaMapMarkerAlt /></span>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg">
                                <div className="position-relative">
                                    <Form.Item name='bus_to' rules={[{ required: true, message: 'Please input your To!' }]}>
                                        <Input placeholder='Enter your From' className="form-control ui-autocomplete-input" id="busTo" />
                                        <span className="icon-inside"><FaMapMarkerAlt /></span>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg">
                                <div className="position-relative">
                                    <Form.Item name='bus_depart' rules={[{ required: true, message: 'Please input your Depart Date!' }]}>
                                        <DatePicker placeholder='Depart Date' className="form-control" id="busDepart" />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg">
                                <div className="travellers-class">
                                    <input type="text" id="busTravellersClass" className="travellers-class-input form-control" name="bus-travellers-class" placeholder="Seats" readonly="" required="" onkeypress="return false;" />
                                    <span className="icon-inside"><i className="fas fa-caret-down"></i></span>
                                    <div className="travellers-dropdown" style={{ display: "none" }}>
                                        <div className="row align-items-center mb-3">
                                            <div className="col-sm-7">
                                                <p className="mb-sm-0">Seats</p>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="qty input-group">
                                                    <div className="input-group-prepend">
                                                        <button type="button" className="btn bg-light-4" data-value="decrease" data-target="#adult-travellers" data-toggle="spinner">-</button>
                                                    </div>
                                                    <input type="text" data-ride="spinner" id="adult-travellers" className="qty-spinner form-control" value="1" readonly="" />
                                                    <div className="input-group-append">
                                                        <button type="button" className="btn bg-light-4" data-value="increase" data-target="#adult-travellers" data-toggle="spinner">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary submit-done" type="button">Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-2 d-grid">
                                <Form.Item>
                                    <Button type='primary' htmlType='submit' block className='btn btn-primary' style={{ height: '50px' }}>Search</Button>
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                    <div className="row">

                        <aside className="col-md-3">
                            <div className="bg-white shadow-md rounded p-3">
                                <h3 className="text-5">Filter</h3>
                                <hr className="mx-n3" />
                                <div className="accordion accordion-flush style-2 mt-n3" id="toggleAlternate">
                                    <Price startRange={isSetRange[0]} endRange={isSetRange[1]} onChangePrice={onChangeBusPrice} />
                                    <Type TypeData={busTypeData} onChangeType={onChangeBusType} />
                                    <Operators OperatorsData={busOperatorsData} onChangeOperators={onChangeBusOperators} />
                                </div>
                            </div>
                        </aside>

                        <div className="col-md-9 mt-4 mt-md-0">
                            <div className="bg-white shadow-md rounded py-4">
                                <div className="mx-3 mb-3 text-center">
                                    <h2 className="text-6 mb-4">{isFrom} <small className="mx-2">to</small>{isTo}</h2>
                                </div>
                                <div className="text-1 bg-light-3 border border-end-0 border-start-0 py-2 px-3">
                                    <div className="row">
                                        <div className="col col-sm-3"><span className="d-none d-sm-block">Operators</span></div>
                                        <div className="col col-sm-2 text-center">Departure</div>
                                        <div className="col-sm-2 text-center d-none d-sm-block">Duration</div>
                                        <div className="col col-sm-2 text-center">Arrival</div>
                                        <div className="col col-sm-3 text-center d-none d-sm-block">Price</div>
                                    </div>
                                </div>
                                <div className="bus-list">
                                    {busBookingListData?.data &&
                                        busBookingListData?.data.map((item) => (
                                            <div className="bus-item">
                                                <div className="row align-items-sm-center flex-row py-4 px-3">
                                                    <div className="col col-sm-3"> <span className="text-3 text-dark operator-name">{item['busoperators_list'].operators_name}</span> <span className="text-1 text-muted d-block">{item['bustype_list'].type}</span> </div>
                                                    <div className="col col-sm-2 text-center time-info"> <span className="text-4 text-dark">{item.time}</span> <small className="text-muted d-block">{item.from}</small> </div>
                                                    <div className="col col-sm-2 text-center d-none d-sm-block time-info"> <span className="text-3 duration">06h 32m</span> <small className="text-muted d-block">12 Stops</small> </div>
                                                    <div className="col col-sm-2 text-center time-info"> <span className="text-4 text-dark">{item.duration}</span> <small className="text-muted d-block">{item.to}</small> </div>
                                                    <div className="col-12 col-sm-3 align-self-center text-end text-sm-center mt-2 mt-sm-0">
                                                        <div className="d-inline-block d-sm-block text-dark text-5 price mb-sm-1">&#8377;{item.price}</div>
                                                        <Button className="btn btn-sm btn-outline-primary shadow-none" onClick={() => handleBusBookingModelClick(item.id)}>
                                                            <i className="fas fa-ellipsis-h d-none d-sm-block d-lg-none" data-bs-toggle="tooltip" title="" data-bs-original-title="Select Seats" aria-label="Select Seats"></i>
                                                            <span className="d-block d-sm-none d-lg-block">Select Seats</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <ul className="pagination justify-content-center mt-4 mb-0">
                                    <Pagination
                                        current={busBookingListData?.currentPage}
                                        onChange={handlePageChange}
                                        total={busBookingListData?.total}
                                        pageSize={busBookingListData?.per_page}
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {selectedItem ? <BookingModel
                selectedItem={selectedItem}
                MenuItem={MenuItem}
                setSelectedItem={setSelectedItem}
                selectedTabItem={selectedTabItem}
                setSelectedTabItem={setSelectedTabItem}
                busList={busList}
                handleBusBookClick={handleBusBookClick}
                selectedSeats={selectedSeats}
                totalPrice={totalPrice}
            /> : null}
        </>
    );
}

export default BusList;
