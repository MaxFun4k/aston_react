import { Grid, IconButton } from "@mui/material";
import "./TrackItem.css";
import { Pause, PlayArrow } from "@mui/icons-material";

interface TrackItemProps {
	active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({active = false}) => {
	return (
		<div className="track">
			<IconButton>
				{active
					? <Pause style={{fontSize: 30, color: "green"}}/>
					: <PlayArrow style={{fontSize: 30, color: "green"}}/>
				}
			</IconButton>
			<img width = {70} 
			height={70}
			src="https://e-cdns-images.dzcdn.net/images/cover/3fedb197fd3ef5c74863611356503ffd/250x250-000000-80-0-0.jpg"/>
			<Grid container direction="column">
				<div>Seven Nation Army</div>
				<div>Gaullin</div>
			</Grid>
		</div>
	);
};

export default TrackItem;