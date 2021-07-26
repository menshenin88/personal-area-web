const userJson = async () => {
    return await fetch('/user')
    .then((response) => {
        if (!response.ok){
            throw response;
        }
        return response.json();
    })
    .then((responseJson) => {
        sessionStorage.setItem('user', JSON.stringify(responseJson))
})
    .catch((error) => {
        console.error(error);
})};

export default userJson;