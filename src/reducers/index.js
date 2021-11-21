import {combineReducers} from 'redux'

const songsReducers = () => {
    return [
        {title: 'song1 title', duration: '4.03'},
        {title: 'song2 title', duration: '2.15'},
        {title: 'song3 title', duration: '6.03'},
        {title: 'song4 title', duration: '5.43'},
        {title: 'song5 title', duration: '4.13'},
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducers,
    selectedSong : selectedSongReducer
})