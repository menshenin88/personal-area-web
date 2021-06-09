const logOut = () => {
    return fetch('http://localhost:8080/logout')
    .then((response) => response.json())
    .then((responseJson) => {      
        console.log(responseJson);
        if (sessionStorage.getItem('user')) {
            sessionStorage.removeItem('user')
        }
})
    .catch((error) => {
        console.error(error);
        //sessionStorage.setItem('user', "hi")
})};

export default logOut;