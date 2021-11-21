// import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import SongList from './SongList'
import SongDetails from './SongDetails'

const App = ()=> {
  return (
    <div className="row">

      <div className="col-md-6 mr-md-4" style={{backgroundColor:'red'}}>
     <SongList/>
      </div>

      <div className="col-md-6" style={{backgroundColor:'blue'}}>
        <SongDetails/>
      </div>

    </div>
  )
}

export default App
