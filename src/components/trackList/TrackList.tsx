import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import  TrackItem  from "../trackItem/TrackItem";

export function TrackList() {
	return (
		<Grid2 container direction={"column"}>
			<Box p={2}>
				<TrackItem/>
				<TrackItem/>
				<TrackItem/>	
				<TrackItem/>
				<TrackItem/>
				<TrackItem/>
			</Box>
		</Grid2>
	);
}