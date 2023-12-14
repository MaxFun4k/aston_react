interface ArtistAndAlbum {
	name: string
	title: string
	cover_medium: string
}

export interface Array {
	id: number
	artist: ArtistAndAlbum
	album: ArtistAndAlbum
	title: string
}

export interface Tracks {
	data: Array 
}

export interface ResponseTypes {
	tracks: Tracks
}