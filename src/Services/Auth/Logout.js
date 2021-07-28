const logOut = async () => {
    const response = await fetch('/logout')
    const data = await response.json();
    sessionStorage.removeItem('user')

    return data
}

export default logOut;