import React from 'react';
import { Modal } from 'antd';
import { IoIosCloseCircle } from "react-icons/io";
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { UserAddCardActionHandler } from '../../../../../Redux/Actions/user/UserAddCard';
import { useDispatch, useSelector } from 'react-redux';
const { Option } = Select;
function AddNewCardModel({ selectedItem, setSelectedItem }) {
    let dispatch = useDispatch();
    const cardType = [
        { cardname: 'Visa' },
        { cardname: 'MasterCard' },
        { cardname: 'American Express' },
        { cardname: 'Discover' }
    ]
    const [form] = Form.useForm();
    const userAddCardData = useSelector((state) => state.UserAddCardData?.user_add_card_data);
    const onFinish = (values) => {
        dispatch(UserAddCardActionHandler(values));
    };
    return (
        <>
            {selectedItem ? <Modal id="add-new-card-details" class="modal fade show" title="Add a Card" open={selectedItem} onCancel={() => setSelectedItem(false)} style={{ display: "block", paddingLeft: "0px" }}>
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body p-4">
                            <Form form={form} initialValues={{ card_type: '', card_number: '', expiry_date: '', cvv_number: '', card_holder_name: '' }} onFinish={onFinish} id="addCard">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <div>
                                            <label for="cardType" class="form-label">Card Type</label>
                                            <Form.Item name="card_type" rules={[{ required: true, message: "Please select a Card Type!" }]}>
                                                <Select id="cardType" className="uploadcomputer-select">
                                                    {cardType && cardType.map((cardTypeName) => (
                                                        <Option key={cardTypeName.cardname} value={cardTypeName.cardname}> {cardTypeName.cardname} </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label for="cardNumber" class="form-label">Card Number</label>
                                        <Form.Item name='card_number' rules={[{ required: true, message: 'Please input your Card Number!' }]}>
                                            <Input placeholder='Card Number' className="form-control" id="cardNumber" />
                                        </Form.Item>
                                    </div>
                                    <div class="col-lg-6">
                                        <label for="expiryDate" class="form-label">Expiry Date</label>
                                        <Form.Item name='expiry_date' rules={[{ required: true, message: 'Please input your Card Number!' }]}>
                                            <Input placeholder='MM/YY' className="form-control" id="expiryDate" />
                                        </Form.Item>
                                    </div>
                                    <div class="col-lg-6">
                                        <label for="cvvNumber" class="form-label">CVV</label>
                                        <Form.Item name='cvv_number' rules={[{ required: true, message: 'Please input your CVV!' }, { min: 3, message: 'CVV must be at least 3 characters long' }]}>
                                            <Input placeholder='CVV (3 digits)' className="form-control" id="cvvNumber" />
                                        </Form.Item>
                                    </div>
                                    <div class="col-12">
                                        <label for="cardHolderName" class="form-label">Card Holder Name</label>
                                        <Form.Item name='card_holder_name' rules={[{ required: true, message: 'Please input your CVV!' }]}>
                                            <Input placeholder='Card Holder Name' className="form-control" id="cardholdername" />
                                        </Form.Item>
                                    </div>
                                    <div class="col-12 d-grid mt-4">
                                        <Form.Item>
                                            <Button type='primary' htmlType='submit' block className='btn btn-primary' style={{ width: '422px', height: '50px' }}> Add Card </Button>
                                        </Form.Item>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Modal > : null
            }
        </>
    );
}

export default AddNewCardModel;
