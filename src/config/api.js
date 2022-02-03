import axios from 'axios';

const full_stack_server = axios.create({
    baseURL: 'http://localhost:3000'
})

const getOptions = async () => {
	try {
		const { status, data } = await axios.get("/api/options");
		console.log("api.getOptions", data);
		if (status === 200) {
			return data;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};


export default {full_stack_server, getOptions};