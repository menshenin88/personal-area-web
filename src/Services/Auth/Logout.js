const logOut = () => {
    return fetch('/logout')
    .then((response) => {
        if (!response.ok){
            throw response;
        }
        return response.json();
    })
    .then((responseJson) => {      
        sessionStorage.removeItem('user')
})
    .catch((error) => {
        console.error(error);
})};

export default logOut;