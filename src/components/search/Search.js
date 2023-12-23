import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IconButton, InputBase, Paper, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchItem } from "../searchItem/SearchItem";
import { useGetSearchItemQuery } from "../../api/tracksApi";
import { useDebounce } from "../../hooks/useDebounce";
import { useAuth } from "../../hooks/useAuth";
import { useAddInHistoryMutation } from "../../api/historyApi";

export function Search() {

	const navigate = useNavigate();

	const [search, setSearch] = useState("");
	const [dropdown, setDropdown] = useState(false);
	const {uid, isAuth} = useAuth();

	const debounced = useDebounce(search, 300);
	const [addInHistory] = useAddInHistoryMutation();
	const {data, isLoading} = useGetSearchItemQuery(debounced, {
		skip: debounced.length < 1,
		refetchOnFocus: true
	});

	useEffect(() => {
		setDropdown(debounced.length > 1);
	}, [debounced]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if(!debounced) {
			return;
		}

		navigate(`/searchPage?search=${debounced}`);

		if(isAuth) {
			await addInHistory({
				searchUrl: window.location.href,
				uid,
				search: debounced
			});
		}
		
	};

	const onSearchButtonClick = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	return (
		<>
			<Paper
				component="form"
				sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 1150, maxWidth: "100%" }}
				onSubmit={handleSubmit}>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Search tracks"
					inputProps={{ "aria-label": "search google maps" }}
					value={search}
					onChange={onSearchButtonClick}/>
				<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
					<SearchIcon />
				</IconButton>
			</Paper>
			{dropdown && <ul style={{listStyleType: "none", 
				position: "absolut", 
				top: "42px", 
				maxHeight: "200px", 
				width: 1150, 
				maxWidth: "100%", 
				background: "#222323", 
				overflowY: "scroll"}}>	
				{isLoading && <CircularProgress/>}
				{data && data.map(track => 
					<SearchItem key={track.id} track={track}/>
				)}
			</ul>}
		</>
	);
}