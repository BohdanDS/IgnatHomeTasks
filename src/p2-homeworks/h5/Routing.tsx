import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/Junior_Plus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus'
    // add paths
}

function Routing() {
    return (
        // <BrowserRouter>
        //     <div>
        //         {/*Switch выбирает первый подходящий роут*/}
        //             <Routes>
        //
        //                 {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
        //                 {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
        //                 <Route path="" element={<PreJunior/>}/>
        //                 <Route path="pre-junior" element={<PreJunior/>}/>
        //                 <Route path="junior" element={<Junior/>}/>
        //                 <Route path="junior_plus" element={<JuniorPlus/>}/>
        //
        //                 {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
        //
        //                 {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        //                 {/*<Route render={() => <Error404/>}/>*/}
        //
        //             </Routes>
        //     </div>
        // </BrowserRouter>

            <Routes>
                <Route path='/' element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path = '*'  element={<Error404/>}/>
            </Routes>

    )
}

export default Routing
