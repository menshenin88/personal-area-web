import history from '../../history'

const logOut = async () => {
    return fetch('/logout')
    .then((response) => {
        if (!response.ok){
            throw response;
        }
        return response.json();
    })
    .then((responseJson) => {      
        sessionStorage.removeItem('user')
        history.push('/')
})
    .catch((error) => {
        console.error(error);
})};

export default logOut;