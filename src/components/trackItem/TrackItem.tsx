import { Grid, IconButton } from "@mui/material";
import "./TrackItem.css";
import { Pause, PlayArrow } from "@mui/icons-material";

import { Array } from "../../api/responseTypes";

type TrackItemProps = {
	active?: boolean;
	track: Array;
}

const TrackItem = ({track, active}: TrackItemProps) => {
	return (
		<div className="track">
			<IconButton>
				{active
					? <Pause style={{fontSize: 30, color: "green"}}/>
					: <PlayArrow style={{fontSize: 30, color: "green"}}/>
				}
				<PlayArrow style={{fontSize: 30, color: "green"}}/>
			</IconButton>
			<img width = {70} 
				height={70}
				src={track.album.cover_medium}
				alt="img song"/>
			<Grid container direction="column">
				<div>{track.title}</div>
				<div>{track.artist.name}</div>
			</Grid>
		</div>
	);
};

export default TrackItem;