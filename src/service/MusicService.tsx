const MusicService = () => {
	const url = "https://deezerdevs-deezer.p.rapidapi.com/playlist/1479458365";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "ba815340cfmsh4067d3f82803528p1f78f3jsnee45100b0aea",
			"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
		}
	};	

	const getResource = async () => {
		try {
			const response = await fetch (url, options);
	
			if (!response.ok) {
				throw new Error(`Could not fetch ${url}, status: ${response.status}`);
			} else {
				const data = await response.json();
				return data;
			}
	
		} catch(e) {
			throw e;
		}
	};

	const getAllTracks = async () => {
		const res = await getResource(url, options)
		return res.tracks.data; 
	};

	return (
		getResource()
	);

};

export default MusicService;

