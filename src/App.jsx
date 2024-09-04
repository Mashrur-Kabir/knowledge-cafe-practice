import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) => { /* how will i drill the data obtained from here? yes, <blogs> -> <blog> . and the singular blog object will be received as parameter here*/
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks); /* update the state with the new array of bookmarks */
  }

  return (
    <>
      <Header></Header>
      <hr className='border-b-1 border-gray-300 mx-28 mb-8' />
      
      <main className='flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs> {/* fn + f12 to go to component instantly */}
        <Bookmarks bookmarks={bookmarks}></Bookmarks> {/* bookmark icon button will try to establish a connection from its component all the way to here. so we will try to add the event handler for prop drilling and update the state here to send it to bookmark as prop*/}
      </main>
    </>
  )
}

export default App

/* Learning point: add handler and state where the effect will be shown by finding the common parent */
