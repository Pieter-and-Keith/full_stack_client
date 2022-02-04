import axios from 'axios';

const signIn = async ({email, password}) => {
	try {
		const { status, data } = await axios.post("api/auth/sign_in", {
			email, password
		});
		console.log("api.signIn", data);
		if (status === 200 || status === 201) {
			return data;
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
		return null;
	}
};

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




export default {signIn, getOptions};