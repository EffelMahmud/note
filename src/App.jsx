import { useState } from "react";
import Navbar from "./components/menubar";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Contact from "./pages/Contact";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
