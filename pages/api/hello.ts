export const handler = async (): Promise<string[]> => {
	try {
		const response = await fetch('http://localhost:3001/home');
		const data = await response.json();
		return data;
	}
	catch(err) {
		console.error(`Error: ${err}`);
		throw(err);
	}
};
