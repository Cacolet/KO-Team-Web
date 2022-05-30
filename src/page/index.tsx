import React, {FC} from 'react'
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import Manage from "../page/Manage";
import Blog from "../page/Blog";
import Join from "../page/Join";
import About from "../page/About";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import styles from "./index.scss";

const Page:FC = () => {
    return (
        <div className={styles.layout}>
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
        </div>
    )
}

export default Page
