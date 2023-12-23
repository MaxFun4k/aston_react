import { useParams } from "react-router-dom";

import { Box, CircularProgress } from "@mui/material";

import { useGetTrackQuery } from "../../../api/tracksApi";
import "./singleTrackPage.css";

const SingleTrackPage = () => {
	const {trackId} = useParams(); 
	const {data: track} = useGetTrackQuery(trackId);
	
	if(!track) {
		return (
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				minHeight="100vh">
				<CircularProgress style={{color: "rgb(15, 230, 15)"}}/>
			</Box>
		);
	}
	return (
		<div className="main">
			<div className="main-item">
				<img
					width={500}
					height={500}
					src={track.album.cover_big}
					alt="Autor"
				/>
			</div>
			<div className="main-item">
				<p>Artist: {track.artist.name} </p>
				<p>Track: {track.title}</p>
			</div>
		</div>
	);
};

export default SingleTrackPage;
