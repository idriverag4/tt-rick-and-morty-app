import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/Navbar"
import { CharactersPage } from "../pages/CharactersPage"
import { CharacterPage } from "../pages/CharacterPage"
import { FavoritesPage } from "../pages/FavoritesPage"
import { Exercise1 } from "../pages/Exercise1"
import { Exercise2 } from "../pages/Exercise2"

export const CharactersRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes >
                    <Route path="characters" element={<CharactersPage />} />
                    <Route path="favorites" element={<FavoritesPage />} />
                    <Route path="exercise1" element={<Exercise1 />} />
                    <Route path="exercise2" element={<Exercise2 />} />
                    <Route path="character/:id" element={<CharacterPage />} />

                    <Route path="/" element={<Navigate to="/characters" />} />
                    {/* <Route path="/*" element={<Navigate to="/characters" />} /> */}
                </Routes>
            </div>
        </>
    )
}