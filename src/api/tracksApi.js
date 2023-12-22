import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// import { ResponseTypes } from "./responseTypes";

export const tracksApi = createApi({
	reducerPath: "tracksApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://deezerdevs-deezer.p.rapidapi.com/",
		headers: {
			"X-RapidAPI-Key": "ba815340cfmsh4067d3f82803528p1f78f3jsnee45100b0aea",
			"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
		}
	}),
	endpoints: builder => ({
		getPlaylist: builder.query({
			query: () => ({
				url: "playlist/1479458365"
			}),
			transformResponse: (response) => response.tracks.data
		}),
		getTrack: builder.query({
			query: (id) => ({
				url: `track/${id}`
			})
		}),
		getSearchItem: builder.query({
			query: (search) => ({
				url: `search?q=${search}`
			}),
			transformResponse: (response) => response.data[0]
		})
	})
});

export const {useGetPlaylistQuery, useGetSearchItemQuery, useGetTrackQuery} = tracksApi;