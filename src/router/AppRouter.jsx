import { Routes, Route } from "react-router-dom";
import { HeroesRoutes } from "../characters/routes/CharactersRoutes";

export const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path="/*" element={
               <HeroesRoutes />
            } />
         </Routes>
      </>
   )
}
