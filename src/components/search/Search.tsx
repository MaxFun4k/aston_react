import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function Search() {
	return (
		<Paper
			component="form"
			sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 1150 }}>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search tracks"
				inputProps={{ "aria-label": "search google maps" }}/>
			<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
    	</Paper>
	);
}