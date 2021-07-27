import { useSelector, useDispatch } from 'react-redux';



const userJson = async () => {
    const response = await fetch('/user')
    const data = await response.json()
    sessionStorage.setItem('user', JSON.stringify(data))
    return data
}

export default userJson;