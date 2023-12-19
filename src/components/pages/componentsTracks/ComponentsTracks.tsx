import { Header } from "../../header/Header";
import { TrackList } from "../../trackList/TrackList";
import "./ComponentsTracks.css";


export function ComponentsTracks() {
	return  (
		<>
			<Header/>
			<div className="main">
				<div className="container">
					<div className="mainInner">
						<p>Track List: </p>
						<TrackList/>
					</div>
				</div>
			</div>
		</>
	);
}