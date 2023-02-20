import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css';
import Main from './layout/Main/Main';
import About from './Components/About/About';



function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
  
   children:[
      {
        path:'/',
        element:<Search></Search>
      },
      
      {
        path:'/about',
        element:<About></About>
      }

]
  }

])



  return (
  
    <div className="App">
     
     

     <RouterProvider router={router}></RouterProvider>
    </div>
    
  );
  
}


export default App;
