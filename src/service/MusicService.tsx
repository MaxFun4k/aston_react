
export function MusicService() {
	const url = "https://deezerdevs-deezer.p.rapidapi.com/album/75793492";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "ba815340cfmsh4067d3f82803528p1f78f3jsnee45100b0aea",
			"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
		}
	};	

	const getResource = async () => {
		let res = await fetch(url, options)
			.then(responce => responce.json());
		
		return res;
	};

	getResource();

}

