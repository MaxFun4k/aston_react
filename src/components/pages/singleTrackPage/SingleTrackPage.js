import { useParams } from "react-router-dom";

import { Box, CircularProgress } from "@mui/material";

import { useGetPlaylistQuery } from "../../../api/tracksApi";
import { Header } from "../../header/Header";
import "./singleTrackPage.css";

export const SingleTrackPage = () => {
	const {trackId} = useParams(); 
	const {data: tracks} = useGetPlaylistQuery();
	
	if(!tracks) {
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
		<>
			<Header/>
			<div className="main">
				<div className="main-item">
					<img
						width={500}
						height={500}
						src={tracks[trackId].album.cover_big}
						alt="Autor"
					/>
				</div>
				<div className="main-item">
					<p>Artist: {tracks[trackId].artist.name} </p>
					<p>Track: {tracks[trackId].title}</p>
				</div>
			</div>
		</>
	);
};
