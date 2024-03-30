import { BASEURL } from '../../../config';
import axios from 'axios';
import authAxios from "../../../Config/AuthAxios";
import { message } from 'antd';
// import { id } from 'date-fns/locale';

export const UserProfileApi = async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await authAxios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: BASEURL + 'getProfile',
        });

        return res;
    } catch (err) {
        return err;
    }
};

export const BusViewBookingApi = async (BusId) => {
    try {
        const token = localStorage.getItem('token');
        const res = await authAxios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: BASEURL + `getBusViewBooking/${BusId}`,
        });

        return res;
    } catch (err) {
        return err;
    }
};

export const BusBookingListApi = async (from, to, newPage, price, busType, busOperators) => {
    try {
        const token = localStorage.getItem('token');
        const res = await authAxios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: BASEURL + `getBusViewList/${from}/${to}?page=${newPage}&price=${price}&busType=${busType}&busOperators=${busOperators}`,
        });

        return res;
    } catch (err) {
        return err;
    }
};

export const BusTypeListApi = async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await authAxios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: BASEURL + `getBusType`,
        });

        return res;
    } catch (err) {
        return err;
    }
};

export const BusOperatorsListApi = async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await authAxios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: BASEURL + `getBusOperators`,
        });

        return res;
    } catch (err) {
        return err;
    }
};

export const BusConfirmDetailsListApi = async (busId) => {
    try {
        const token = localStorage.getItem('token');
        const res = await authAxios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: BASEURL + `getConfirmBusDetails?busId=${busId}`,
        });

        return res;
    } catch (err) {
        return err;
    }
};

export const UserProfileUpdateApi = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const res = await authAxios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'POST',
            url: BASEURL + 'updateProfile',
            data: JSON.stringify(data),
        });

        return res;
    } catch (err) {
        return err;
    }
};

export const UserAddCardApi = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const res = await authAxios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'POST',
            url: BASEURL + 'addCard',
            data: JSON.stringify(data),
        });

        return res;
    } catch (err) {
        return err;
    }
};


export const UserCardListApi = async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await authAxios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: BASEURL + `getCard`,
        });

        return res;
    } catch (err) {
        return err;
    }
};

export const UserCardDeleteApi = async (cardId) => {
    try {
        const token = localStorage.getItem('token');
        const res = await authAxios({
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
            url: BASEURL + `getCardDelete/${cardId}`,
        });

        return res;
    } catch (err) {
        return err;
    }
};