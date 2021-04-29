import React from 'react';

const userJson = () => {
    return fetch('http://localhost:8080/user')
    .then((response) => response.json())
    .then((responseJson) => {      
        console.log(responseJson);
        console.log(JSON.stringify(responseJson))
        sessionStorage.setItem('user', JSON.stringify(responseJson))
        console.log(sessionStorage.getItem('user'))
})
    .catch((error) => {
        console.error(error);
})};

export default userJson;