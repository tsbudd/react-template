import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../../view/pages/home";

export function CustomRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}