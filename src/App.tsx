import {Link, Route, Routes} from "react-router-dom";
import './index.scss';
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {Suspense} from "react";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export {App}