import full_stack_server from "../config/api";

export async function signUp(data) {
    const response = await full_stack_server.post('/api/auth/sign_up', data);
    return response.data
}

export async function signIn(data) {
    const response = await full_stack_server.post('/api/auth/sign_in', data);
    return response.data
}

export async function signOut(data) {
	return data.username
}