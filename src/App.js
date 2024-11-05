import './App.css';
import Portfolio from './my-portfolio/portfolio ';
import About from './my-portfolio/About';
import Navbar from './my-portfolio/Navbar';
import Education from './my-portfolio/education';
import Skill from './my-portfolio/Skill';
import Project from './my-portfolio/Project';
import Extracurricular from './my-portfolio/Extracurricular';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter ,Router,Route,RouterProvider } from 'react-router-dom';

export default function App() {
 const router= createBrowserRouter([
 
{
    path:'/',
    element:<><Navbar/><About/></>
},
{
    path:'/About',
    element:<><Navbar/><About/></>
},
{
  path:'/education',
  element:<><Navbar/><Education/></>
},
{
  path:'/Skill',
  element:<><Navbar/><Skill/></>
},
{
  path:'/Project',
  element:<><Navbar/><Project/></>
},
{
  path:'/extracurricular',
  element:<><Navbar/><Extracurricular/></>
},

]
)
    
 return <RouterProvider router={router} />
}
