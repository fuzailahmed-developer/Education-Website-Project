import { Route, Routes } from "react-router"
import Home from "../pages/Home"

export const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    )
}