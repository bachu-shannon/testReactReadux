import { ADD_USER } from '../constants/action_types';
import axios from 'axios';

export function setUser(newUser) {
    return {
        type: ADD_USER,
        payload: {
            newUser: newUser
        }
    }
}

export function addUser(newUser) {
    return dispatch => {
        dispatch(setUser(newUser));
        axios.post('http://api.demo.lakmus.org/api/clients/', {
            params: {
                name: newUser.name,
                gender: newUser.gender,
                birthYear: newUser.birthYear,
                birthMonth: newUser.birthMonth,
                birthDay: newUser.birthDay,
                phone: newUser.phone,
                email: newUser.email,
                address: newUser.address,
                description: newUser.description,
            }
        })
            .then((response) => {
                console.log("Success:" + response);
            })
                .then((error) => {
                    console.log(error);
                })
    }
}