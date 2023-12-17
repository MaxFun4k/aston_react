import { useDispatch } from "react-redux";
import { Grid, IconButton, Box } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";

import "./TrackItem.css";

import { playTrack, setActiveTrack } from "../../redux/slices/playerSlice";

const TrackItem = ({track, active}) => {

	const dispatch = useDispatch();

	const play = (e) => {
		console.log("Click");
		e.preventDefault();
		dispatch(setActiveTrack(track));
		dispatch(playTrack());
	};

	return (
		<div className="track">
			<IconButton onClick={play}>
				{active
					? <Pause style={{fontSize: 30, color: "rgb(15, 230, 15)"}}/>
					: <PlayArrow style={{fontSize: 30, color: "rgb(15, 230, 15)"}}/>
				}
			</IconButton>
			<Box p={2}>
				<img width = {70} 
					height={70}
					src={track.album.cover_medium}
					alt="img song"/>
			</Box>
			<Grid container direction="column">
				<Box p={1}>
					<div>{track.title}</div>
				</Box>
				<Box p={1}>
					<div>{track.artist.name}</div>
				</Box>
			</Grid>
		</div>
	);
};

export default TrackItem;