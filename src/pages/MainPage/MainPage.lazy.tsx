import {lazy} from "react";

const MainPageLazy = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./MainPage')), 1000)
}))

export {MainPageLazy}