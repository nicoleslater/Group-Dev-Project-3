
import {useState} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ImageResult from './components/common/ImageResult'


import Home from './components/Home/Home'
import Favorites from './components/Favorites/Favorites'
import ImageDetails from './components/ImageDetails/ImageDetails'
import Results from './components/Results/Results'

import './App.css'

function App() {

  const [searchResult, updateSearchResult] = useState([])
  const [savedFavorites, updateSavedFavorites] = useState({})

  return (
  
      <div className='wrapper'>
         <Router>
           <main>
             <Routes>
               <Route path='/' element={<Home
                updateSearchResult={updateSearchResult}  
               />}/>
               <Route path='/favorites' element=
                  {<Favorites 
                      savedFavorites={savedFavorites}
                      updateSavedFavorites={updateSavedFavorites}
                      />}/>
               <Route path='/imagedetails/:id' element={<ImageDetails/>}/>
               <Route path='/search/:query' element={<Results/>}/>
               <Route path='/imageresult' element={<ImageResult/>}/>
            </Routes>
           </main>
        </Router>
      </div>
    
  )
}

export default App
