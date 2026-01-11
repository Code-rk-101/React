import { useState } from 'react'
import './App.css'
import Dashboard from '../components/dashbord'
import Footer from '../components/footer'
import Header from '../components/header'
import PostList from '../components/postlist'
import Sidebar from '../components/sidebar'
import CreatePost from '../components/createPost'
import { PostListContextProvider } from '../store/post-list-store';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Outlet } from 'react-router-dom'


function App() { 

  const [selectedBar,setSelectedBar] = useState("Home")
  
  return (

    <PostListContextProvider>
      <div className='main'>

        <Sidebar selectedBar ={selectedBar} setSelectedBar = {setSelectedBar}></Sidebar>

        <div className ='content'>
          <Header></Header>
          
          {/* {selectedBar === 'Home' && <PostList></PostList>}

          {selectedBar === 'Dashboard' && <Dashboard></Dashboard>}

          {selectedBar === 'Create Post' && <CreatePost></CreatePost>} */}
          {1 == 0  & <CreatePost 
          selectedBar ={selectedBar}setSelectedBar = {setSelectedBar}></CreatePost>}
          <Outlet></Outlet>
        </div>

        <div className='footer-offset'>
          <Footer></Footer>
        </div>

      </div>
    </PostListContextProvider>   
  )
}

export default App
