import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import MainPage from './components/MainPage.jsx'
import { RouterProvider } from 'react-router-dom'
import Accordion from './UI COMPONENTS/Accordian.jsx'
import CreateProject from './UI COMPONENTS/LoginPage.jsx'
import PaymentForm from './UI COMPONENTS/PaymentPage.jsx'
import InfiniteScrollText from './UI COMPONENTS/Infinitetext.jsx'
import AvatarComponent from './UI COMPONENTS/Avatar.jsx'
import ButtonShowcase from './UI COMPONENTS/button.jsx'
import DropdownShowcase from './UI COMPONENTS/Dropdown.jsx'
import AnimatedText from './UI COMPONENTS/AnimatedText.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/components",
    element:<MainPage/>,
    children:[
      {
        path:"/components/accordion",
        element:<Accordion/>
      },
      {
        path:"/components/login",
        element:<CreateProject/>
      },
      {
        path:"/components/payment-card",
        element:<PaymentForm/>
      },
      {
        path:"/components/InfiniteScrollText",
        element:<InfiniteScrollText/>
      },
      {
        path:"/components/avatar",
        element:<AvatarComponent/>
      },
      {
        path:"/components/button",
        element:<ButtonShowcase/>
      },
      {
        path:"/components/dropdown-menu",
        element:<DropdownShowcase/>
      },
      {
        path:"/components/animated-text",
        element:<AnimatedText/>
      }
     
     
      
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <StrictMode>

    <App />
  </StrictMode>
  </RouterProvider>
)
