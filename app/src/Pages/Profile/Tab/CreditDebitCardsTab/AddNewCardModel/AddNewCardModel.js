import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { Form, Input, Button, Select } from 'antd';
import { UserAddCardActionHandler } from '../../../../../Redux/Actions/user/UserAddCard';
import { UserEditCardListActionHandler } from '../../../../../Redux/Actions/user/UserEditCardList';
import { useDispatch, useSelector } from 'react-redux';
const { Option } = Select;
function AddNewCardModel({ selectedItem, setSelectedItem, issetCardId }) {
    let dispatch = useDispatch();
    const cardType = [
        { cardname: 'Visa' },
        { cardname: 'MasterCard' },
        { cardname: 'American Express' },
        { cardname: 'Discover' }
    ]
    const [form] = Form.useForm();
    const userEditCardListData = useSelector((state) => state.UserEditCardData?.user_edit_card_list_data);
    const onFinish = (values) => {
        let card = values;
        if (issetCardId) {
            card = { ...values, id: issetCardId };
        }
        dispatch(UserAddCardActionHandler(card));
    };
    useEffect(() => {
        if (issetCardId) {
            dispatch(UserEditCardListActionHandler(issetCardId));
        }
    }, [issetCardId]);
    useEffect(() => {
        if (userEditCardListData) {
            const { card_type, card_number, expiry_date, cvv_number, card_holder_name } = userEditCardListData;
            form.setFieldsValue({
                card_type: card_type,
                card_number: card_number,
                expiry_date: expiry_date,
                cvv_number: cvv_number,
                card_holder_name: card_holder_name
            });
        }
    }, [userEditCardListData]);
    return (
        <>
            {selectedItem ? <Modal id="add-new-card-details" className="modal fade show" title="Add a Card" open={selectedItem} onCancel={() => setSelectedItem(false)} style={{ display: "block", paddingLeft: "0px" }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <Form form={form} initialValues={{ card_type: '', card_number: '', expiry_date: '', cvv_number: '', card_holder_name: '' }} onFinish={onFinish} id="addCard">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div>
                                            <label for="cardType" className="form-label">Card Type</label>
                                            <Form.Item name="card_type" rules={[{ required: true, message: "Please select a Card Type!" }]}>
                                                <Select id="cardType" className="uploadcomputer-select">
                                                    {cardType && cardType.map((cardTypeName) => (
                                                        <Option key={cardTypeName.cardname} value={cardTypeName.cardname}> {cardTypeName.cardname} </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label for="cardNumber" className="form-label">Card Number</label>
                                        <Form.Item name='card_number' rules={[{ required: true, message: 'Please input your Card Number!' }]}>
                                            <Input placeholder='Card Number' className="form-control" id="cardNumber" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="expiryDate" className="form-label">Expiry Date</label>
                                        <Form.Item name='expiry_date' rules={[{ required: true, message: 'Please input your Card Number!' }]}>
                                            <Input placeholder='MM/YY' className="form-control" id="expiryDate" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-lg-6">
                                        <label for="cvvNumber" className="form-label">CVV</label>
                                        <Form.Item name='cvv_number' rules={[{ required: true, message: 'Please input your CVV!' }, { min: 3, message: 'CVV must be at least 3 characters long' }]}>
                                            <Input placeholder='CVV (3 digits)' className="form-control" id="cvvNumber" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-12">
                                        <label for="cardHolderName" className="form-label">Card Holder Name</label>
                                        <Form.Item name='card_holder_name' rules={[{ required: true, message: 'Please input your CVV!' }]}>
                                            <Input placeholder='Card Holder Name' className="form-control" id="cardholdername" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-12 d-grid mt-4">
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
