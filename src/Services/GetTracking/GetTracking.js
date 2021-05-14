const GetTracking = async (num) => {
    try {
        const response = await fetch(`https://api.gvs-global.com/v1/tracking/${num}`);
        const responseJson = await response.json();
        sessionStorage.setItem('tracking', JSON.stringify(responseJson));
        console.log(responseJson)
        return responseJson;
    } catch (error) {
        console.error(error);
    }};

export default GetTracking;