const axios = require("axios");

const getClima = async (lat, lng) => {
    // axios...

    let resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=94edd929ddd37d02247e18c418394515`
    )

    if (resp.data.cod == 401)
    {
        throw new Error(`No hay datos para las coordenadas (${lat},${lng}`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}