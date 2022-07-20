import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/Navbar"
import { CharactersPage } from "../pages/CharactersPage"
import { CharacterPage } from "../pages/CharacterPage"
import { FavoritesPage } from "../pages/FavoritesPage"

export const CharactersRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes >
                    <Route path="characters" element={<CharactersPage />} />
                    <Route path="favorites" element={<FavoritesPage />} />
                    <Route path="character/:id" element={<CharacterPage />} />

                    <Route path="/" element={<Navigate to="/characters" />} />
                </Routes>
            </div>
        </>
    )
}