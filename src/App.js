import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import  About  from "./Components/About";
import { Outlet, createBrowserRouter,RouterProvider } from "react-router-dom";
import Error from "./Components/Error";
import Error2 from "./Components/Error2";
import Contact from "./Components/Contact.js"
import RestaurantCard from "./Components/RestaurantCard";
import RestaurantMenu from "./Components/RestaurantMenu.js"
import Login from "./Components/Login.js"
import { Provider } from "react-redux";
import store from "./utils/store.js";
const AppLayout =()=>{

  return(
    <Provider store={store} >
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    </Provider>
     
  )
}

// const appRouter = createBrowserRouter([
//   {
//     path: "/", // show path for routing
//     element : <AppLayout/>, // Show component for perticular path
//     errorElement:<Error/>
//   },

//   {
//     path: "/about",
//     element : <About/>,
//     errorElement: <Error2/>
//   }
// ])

const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)