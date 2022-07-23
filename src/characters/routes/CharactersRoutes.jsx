import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/Navbar"
import { CharactersPage, CharacterPage, FavoritesPage, Exercise1, Exercise2 } from "../pages"

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