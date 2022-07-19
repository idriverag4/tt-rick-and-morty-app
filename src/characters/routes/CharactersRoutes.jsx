import { Navigate, Route, Routes } from "react-router-dom"
// import { Navbar } from "../../ui"
import { RickMortyPage } from "../pages/RickMortyPage"

export const HeroesRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}

            <div className="container">
                <Routes >
                    <Route path="rick-morty" element={<RickMortyPage />} />
                    <Route path="/" element={<Navigate to="/rick-morty" />} />
                </Routes>
            </div>
        </>
    )
}