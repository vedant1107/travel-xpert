import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import List from './components/List/List'

import { CssBaseline, Grid } from '@mui/material';

import { getPlacesData } from './api';

function App() {
	// array of the places in returned by API 
	const [places, setPlaces] = useState([])

	// coordinates of the center of the map
	const [coordinates, setCoordinates] = useState({})

	// bounds means the coordinates of top right and bottom left of the visible map
	const [bounds, setBounds] = useState({})

	// to get the coordinates of user's current location, this wll run when the map loads for the first time
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(( {coords : {latitude, longitude}}) => {
			
			setCoordinates({lat: latitude, lng: longitude})
		})
	}, [])

	// for API call
	useEffect(() => {

		// console.log(coordinates, bounds)
		// API gets called every time coordinates and bounds change

		getPlacesData(bounds.sw, bounds.ne)
			.then((data) => {
				// console.log(data)

				setPlaces(data)
			})
	}, [coordinates, bounds])

	return (
		<div>

			<CssBaseline />
			<Header />

			<Grid container spacing={3} style={{ width: '100%' }}>

				{/* Left side bar of places list */}
				<Grid item xs={12} md={4} >
					<List places = {places}/>
				</Grid>

				{/* Map */}
				<Grid item xs={12} md={8} >
					<Map 
						setCoordinates={setCoordinates}
						setBounds = {setBounds}
						coordinates = {coordinates}
						places = {places}
					/>
				</Grid>
			</Grid>

		</div>
	)
}

export default App
