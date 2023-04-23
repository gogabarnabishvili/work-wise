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
            <Route path="/landigPage" element={<LandigPage />} />
            <Route path="/" element={<MainPage />} />
        </>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
