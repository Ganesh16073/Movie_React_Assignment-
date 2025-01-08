import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Popular from './components/PopularMovies/Popular'
import TopRated from './components/TopRatedMovies/TopRated'
import UpComing from './components/UpComingMovies/UpComing'
import Card from './components/Card/Card'
import Search from './components/Search/Search'
import MovieDetail from './components/MovieDetail/MovieDetail'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        < Route path='/' element={<Popular/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/topRated' element={<TopRated/>}/>
        <Route path='/upComing' element={<UpComing/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/movie/:id' element={<MovieDetail />} />

      </Route>
    )
  )
  return (
    <>
     <RouterProvider router={router}/>
    </>
 
  
  )
}

export default App
