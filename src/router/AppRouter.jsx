import { Routes, Route } from "react-router-dom";
import { CharactersRoutes } from "../characters/routes/CharactersRoutes";

export const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path="/*" element={
               <CharactersRoutes />
            } />
         </Routes>
      </>
   )
}
