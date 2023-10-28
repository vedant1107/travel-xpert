import React from "react";
import GoogleMapReact from "google-map-react";
import './custom.css'
import { styled } from '@mui/material/styles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import Rating from '@mui/material/Rating';



//custom styled components
const MarkerContainer = styled('div')(() => ({
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 }
}));


// alternate image
const alternateImageUrl = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"

//component
// destructured props
const Map = ({ setCoordinates, setBounds, coordinates, places }) => {

    const isDesktop = useMediaQuery('(min-width:600px)') 
    // will set to false if width < 600px



    return (
        <div style={{height: '90vh', width: '100%'}}>  

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
                    setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne  })
                    // console.log("printing bounds")
                    // console.log(e.marginBounds.sw, e.marginBounds.ne)
                }}
                onChildClick={''}
                
            >
                
                {places?.map((place, i) => (

                    //class markercontainer custom styled component
                    <MarkerContainer
                        // style={{}}
                        lat = {Number(place.latitude)}
                        lng = {Number(place.longitude)}
                        key = {i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                            ) : (
                                <Paper elevation={3} sx={{padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'}}>
                                    
                                    <Typography variant="subtitle2">
                                        {place.name}
                                    </Typography>

                                    <img 
                                        src={place.photo ? place.photo.images.large.url : alternateImageUrl}
                                        alt={place.name}
                                        style={{cursor: "pointer"}}
                                    />

                                    <Rating name="half-rating-read" size="small" defaultValue={Number(place.rating)} precision={0.5} readOnly />

                                </Paper>
                            )
                        }
                    </MarkerContainer>
                ))}

            </GoogleMapReact>
        </div>
    )
}

export default Map;







// {places?.map((place, i) => (
//     <div
//         key={i}
//         lat = {Number(place.latitute)}
//         lng = {Number(place.longitude)}
        
//         style={{position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 }}}
//     >
//         {
//             !isDesktop ? (
//                 <LocationOnOutlinedIcon color="primary" fontSize="large" />
//             ) : (
//                 <Paper elevation={3} sx={{padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'}}>
//                     <Typography variant="subtitle2" gutterBottom>
//                         {place.name}
//                     </Typography>
//                     <img
//                         src={place.photo ? place.photo.images.large.url : alternateImageUrl}
//                         alt={place.name}
//                         style={{cursor: 'pointer'}}
//                     />

//                     <Rating size="small" value={Number(place.rating)} readOnly/>
//                 </Paper>
//             )
//         }
//     </div>
// ))}