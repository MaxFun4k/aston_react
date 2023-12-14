import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import  TrackItem  from "../trackItem/TrackItem";
import { useGetPlaylistQuery } from "../../api/tracksApi";

export function TrackList() {
	const {data: tracks, isLoading} = useGetPlaylistQuery();
	if(isLoading){
		return <div>Loading...</div>;			//Нужен лоадер
	}
	return (
		<Grid2 container direction={"column"}>
			<Box p={2}>
				{tracks.map(track => 
					<TrackItem key={track.id} track={track}/>
				)}
			</Box>
		</Grid2>
	);
}