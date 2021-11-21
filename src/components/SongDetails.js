import React from 'react'
import { connect } from 'react-redux'


const SongDetails = (props) => {
    console.log("SongDetails prop:",props)
    return (
        <div className="row">
            <div className="col-md-6">
                Song Name:
                <div>
                    {props.song&&props.song.title}
                </div>
            </div>
            <div className="col-md-6">
                Song duration:
                <div>
                    {props.song&&props.song.duration}
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {song: state.selectedSong}
}

export default connect(mapStateToProps) (SongDetails)
