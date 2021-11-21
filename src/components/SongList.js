import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'

import { selectSong } from '../actions'

class SongList extends React.Component{

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="row">

               <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="container" key={song.title}>
                    {song.title}
                </div>
                   
               </div>
               
                <div className="col-md-3 my-md-3">
                    <button
                    onClick={()=> this.props.selectSong(song)}
                    className="btn btn-primary">
                        Select
                    </button>
                </div>    
                
                {/* Song Card */}
                <div className="col-md-2">
                    
                </div>
                    
                </div>
            )
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
              {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    // return state
    
    return {
        songs: state.songs
    }


}

export default connect(mapStateToProps, {
    selectSong: selectSong
}) (SongList)
