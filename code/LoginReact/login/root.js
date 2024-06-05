import React from "react";
import { BrowserRouter, Routers, Route} from 'react-router-dom';


function Root(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<loginpage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Root;