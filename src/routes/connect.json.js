import Debug from "debug"
const debug = Debug("matrx:connect.json")  // Don't forget to set environment variable with 'DEBUG=matrx:*' and localStorage with debug='matrx:*'

export const post = async (request) => {
	debug("POST /connect.json")
	return {
		status: 200,
		body: {session: 'sessionID'}
	}
};
