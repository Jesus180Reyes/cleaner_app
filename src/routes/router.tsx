import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage,AboutPage,MisionsPage,LocationPage,BlogPage,ContactPage } from "../pages/";
import { App } from "../App";

export const router = createBrowserRouter([
  {
      path:'/',
      element: <App/>,
      children: [
          {
              index: true,
              element: <HomePage/>
          },
          {
            path: "/sobreNosotros",
            element: <AboutPage/>
          },
          {
            path: "/misionyvision",
            element: <MisionsPage/>
          },
          {
            path: "/ubicacion",
            element: <LocationPage/>
          },
          {
            path: "/blog",
            element: <BlogPage/>
          },
          {
            path: "/contactanos",
            element: <ContactPage/>
          },
          
            
            { path: '*', element: <Navigate to="/" /> },
        ],
        
    },
    
 

]);