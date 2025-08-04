import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {Route, Routes} from "react-router";
import {navItems} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";

const Main = () => {

    return (
        <Routes>
            {['/',navItems[0]].map(path => <Route key={path} path={path} element={<Home/>}/>)}
            {/*<Route path={'/'} element={<Home/>}/>*/}
            {/*<Route path={`${navItems[0]}`} element={<Home/>}/>*/}
            <Route path={`${navItems[1]}`} element={<AboutMe/>}/>
            <Route path={`${navItems[2]}`} element={<StarWars/>}/>
            <Route path={`${navItems[3]}`} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
    // switch (page) {
    //     case navItems[1]:
    //         return <AboutMe/>;
    //     case navItems[2]:
    //         return <StarWars/>;
    //     case navItems[3]:
    //         return <Contact/>;
    //     default:
    //         return <Home/>;
    // }
}

export default Main;