import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails'

// custom css to components
const StyledFormControl = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
}));


// component
const List = ( { places } ) => {
    const [type, setType] = useState("restaurants")
    const [rating, setRating] = useState(0);

    

    return (
        <div style={{ padding: "25px" }}>
            <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginBottom: '30px' }}>
                <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    label="Type"
                >
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginBottom: '30px' }}>
                <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    label="Rating"
                >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>

           <Grid container spacing={3} sx={{height: '75vh', overflow: 'auto'}}>
                {places?.map((place, i) => (
        
                    <Grid item key={i} xs={12}>
                         <PlaceDetails place={place}/>         {/* place is a prop} */}
                    </Grid>
                    
                ))}
           </Grid>

            
        </div>
    )
}

export default List;
