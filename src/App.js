import { useState } from "react";
import LandigPage from "./pages/LandigPage";
import MainPage from "./pages/MainPage";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { LanguageContext } from "./components/lenguage-change/LenguagecContext";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LandigPage />} />
            <Route path="/mainPage" element={<MainPage />} />
        </>
    )
);
function App() {
    const [language, updateLang] = useState("GE");
    return (
        <LanguageContext.Provider value={{ language, updateLang }}>
            <RouterProvider router={router} />
        </LanguageContext.Provider>
    );
}

export default App;
