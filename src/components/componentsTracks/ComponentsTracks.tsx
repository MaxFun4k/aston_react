import { TrackList } from "../trackList/TrackList";
import "./ComponentsTracks.css";

export function ComponentsTracks() {
	return  (
		<div className="main">
			<div className="container">
				<div className="mainInner">
					<p>Track list: </p>
					<TrackList/>
				</div>
			</div>
		</div>
	);
}