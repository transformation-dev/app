import { session } from "$app/stores";
import Debug from "debug"
const debug = Debug("matrx:kv-test.json")  // Don't forget to set environment variable with 'DEBUG=matrx:*' and localStorage with debug='matrx:*'

export const get = async (request) => {
	debug("GET /kv-test.json")
	debug(request)
	// result = await SESSION.put('some key', 'some value')
	return {
		status: 200,
		body: {request}
	}
};
