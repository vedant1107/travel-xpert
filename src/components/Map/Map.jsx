import React from "react";
import GoogleMapReact from "google-map-react";

import { styled } from '@mui/material/styles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import Rating from '@mui/material/Rating';


//custom styles
const MapContainer = styled('div')(({ theme }) => ({
    height: '85vh', width: '100%'
}));


//componenr
const Map = ({ setCoordinates, setBounds, coordinates }) => {

    const isMobile = useMediaQuery('(min-width:600px)') // will set to false if width > 600px



    return (
        <MapContainer>  {/*custom styled component*/}
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDupYyYnVps7mOk1imijaRgBOk1JopIAmI" }}
                //coordinates of mumbai
                defaultCenter={{lat: 19.076090, lng: 72.877426}}  
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    // console.log(e)
                    // when we scroll the map or change the position lat and lng will get updated
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </MapContainer>
    )
}

export default Map;