import React, {FC} from 'react'
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import Manage from "../page/Manage";
import Blog from "../page/Blog";
import Join from "../page/Join";
import About from "../page/About";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

const Page:FC = () => {
    return (
        <>
            <Header/>
            <div>
                <Routes>
                    <Route  path='/' element={<Home/>}></Route>
                    <Route path='/blog' element={<Blog/>}></Route>
                    <Route path='/manage' element={<Manage/>}></Route>
                    <Route path='/join' element={<Join/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default Page
