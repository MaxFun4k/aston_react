import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchItem } from "../searchItem/SearchItem";
import { useGetSearchItemQuery } from "../../api/tracksApi";
import { useDebounce } from "../../hooks/useDebounce";

export function Search() {

	const [search, setSearch] = useState("");
	const debounced = useDebounce(search, 300);
	const {data: track, isLoading} = useGetSearchItemQuery(debounced, {
		skip: debounced.length < 3
	});

	if(isLoading) {
		return (
			<div>
				ждем
			</div>
		);
	}

	return (
		<>
			<Paper
				component="form"
				sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 1150, maxWidth: "100%" }}>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Search tracks"
					inputProps={{ "aria-label": "search google maps" }}
					value={search}
					onChange={(e) => {
						e.preventDefault();
						setSearch(e.target.value);
					}}/>
				<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
					<SearchIcon />
				</IconButton>
			</Paper>
			{track && <SearchItem track={track}/>}
		</>
	);
}