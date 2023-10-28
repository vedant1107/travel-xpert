import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material'
// import { LocationOnIcon, PhoneIcon } from '@mui/icons-material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from "@mui/material/Rating";

//alternate image
const alternateImageUrl = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"

const PlaceDetails = ({ place }) => {
    return (
        <Card elevation={6}>
            
            {/* place image */}
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : alternateImageUrl}
                title={place.name}
            />

            <CardContent>
                {/* place name */}
                <Typography gutterBottom variant="h5">
                    {place.name}
                </Typography>
                
                {/* Rating */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
    
                    <Rating name="half-rating-read" size="small" defaultValue={Number(place.rating)} precision={0.5} readOnly />
                    
                    <Typography variant="subtitle1">
                        out of {place.num_reviews ? place.num_reviews : 0} reviews
                    </Typography>
                </Box>

                {/* price */}
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.price_level}
                    </Typography>
                </Box>

                {/* ranking */}
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.ranking}
                    </Typography>
                </Box>

                {/* awards */}
                {place?.awards?.map((award) => (
                    <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                        <img src={award.images.small} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}

                {/* cuisine chips */}
                {place?.cuisine?.map((cuis) => (
                    <Chip key={cuis.name} size="small" label={cuis.name} sx={{ margin: '5px 5px 5px 0' }} />
                ))}

                {/* address */}
                {place?.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                        <LocationOnIcon />{place.address}
                    </Typography>
                )}
                
                {/* phone details */}
                {place.phone && (
                    <Typography variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
            </CardContent>
            
            {/* websites */}
            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>Trip Advisor</Button>
                <Button size="small" color="primary" onClick={() => { window.open(place.website, '_blank') }}>Website</Button>
            </CardActions>
        </Card>
    )
}

export default PlaceDetails;