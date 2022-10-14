import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movei } from "../page/Feed";
import { TheMoveiDetail  } from "../page/Detail";
 

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Movei />} />
                <Route path="/filme/detalhe/:id" element={<TheMoveiDetail />} />
            </Routes>
        </BrowserRouter>
    )
}