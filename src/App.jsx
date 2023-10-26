import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import List from './components/List/List'

import { CssBaseline, Grid } from '@mui/material';

import { getPlacesData } from './api';

function App() {
	const [places, setPlaces] = useState([])

	const [coordinates, setCoordinates] = useState({lat: 0, lng: 0})
	const [bounds, setBounds] = useState({})

	// to get the coordinates of user's current location
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(( {coords : {latitude, longitude}}) => {
			setCoordinates({lat: latitude, lng: longitude})
		})
	}, [])

	// for API call
	useEffect(() => {

		console.log(coordinates, bounds)
		// API gets called every time coordinates and bounds change

		getPlacesData(bounds.ne, bounds.sw)
			.then((data) => {
				console.log(data)

				setPlaces(data)
			})
	}, [coordinates, bounds])

	return (
		<div>

			<CssBaseline />
			<Header />

			<Grid container spacing={3} style={{ width: '100%' }}>
				<Grid item xs={12} md={4} >
					<List places = {places}/>
				</Grid>
				<Grid item xs={12} md={8} >
					<Map 
						setCoordinates={setCoordinates}
						setBounds = {setBounds}
						coordinates = {coordinates}
					/>
				</Grid>
			</Grid>

		</div>
	)
}

export default App
