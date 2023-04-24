import LandigPage from "./pages/LandigPage";
import MainPage from "./pages/MainPage";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LandigPage />} />
            <Route path="/mainPage" element={<MainPage />} />
        </>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
