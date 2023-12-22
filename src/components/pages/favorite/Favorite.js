import { useSelector } from "react-redux";

import { CircularProgress, Box, Link } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import TrackItem from "../../trackItem/TrackItem";

import { useGetFavoritesQuery } from "../../../api/favoriteApi";
import { useAuth } from "../../../hooks/useAuth";

import "../componentsTracks/ComponentsTracks.css";

const Favorite = () => {

	const {uid} = useSelector(state => state.user);

	const {data, isLoading, isFetching} = useGetFavoritesQuery(uid);
	
	if(isLoading || isFetching) {
		return <Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="100vh">
			<CircularProgress style={{color: "rgb(15, 230, 15)"}}/>
		</Box>;
	}

	return (
		<div className="main">
			<Grid2 container direction={"column"}>
				<Box p={2}>
					{data && data.map((track) => 
						<Link key={track.id} to={`track/${track.id}`} style={{ color: "inherit", textDecoration: "inherit"}}>
							<TrackItem key={track.id} track={track}/>
						</Link>,
					)}
				</Box>
			</Grid2>
		</div>
	);
};

export default Favorite;