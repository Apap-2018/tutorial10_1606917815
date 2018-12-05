const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Appointment = {

	//Melakukan Request getAllPasien
	getAllPasien() {
		return fetch(`${cors}${baseUrl}/1/getAllPasien`,{
			method: 'GET'
		})
		//then untuk memanipulasi response
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	//Melakukan Request getDetailPasien
	getDetailPasien(idPasien) {
		return fetch(`${cors}${baseUrl}/getPasien/${idPasien}` ,{
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	//Melakukan Request updateStatusPasien(requestBody)
	updateStatusPasien(requestBody) {
		return fetch(`${cors}${baseUrl}/1/updatePasien`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

	//Melakukan Request getAllStaffFarmasi
	getAllStaffFarmasi() {
		return fetch(`${cors}${baseUrl}/1/getAllStaffFarmasi`,{
			method: 'GET'
		})
		//then untuk memanipulasi response
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},


	//Melakukan Request addHasilLabPasien
	addHasilLabPasien(requestBody) {
		return fetch(`${cors}${baseUrl}/1/addLabResult`,{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},

}