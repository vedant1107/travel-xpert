// Travel advsior api from rapid api
// copy pasted the code snippet of javascript(axios) 
// endpoint - /restaurants/list-in-boundary

import axios from 'axios';

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

// check the order (sw, ne) i guess it should be (ne, sw) but doesnt work if we write (ne, sw)
export const getPlacesData = async (sw, ne) => {
    try {
        //request
        const { data : { data } } = await axios.get(URL, {
            // method: 'GET',
            params: {
              //bl -> bottom left , sw -> south west, tr -> top right, ne -> north east
              bl_latitude: sw.lat,   
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
            },
            headers: {
              'X-RapidAPI-Key': 'd5d621dbbemsh2c9d8db1384dac2p194a0djsn71c2069b62be',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data;

    } catch(error) {
        console.log("error")
    }
}