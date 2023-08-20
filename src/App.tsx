import "./css/app.scss";
import { Route, Routes } from "react-router-dom";
import IndexRoute from "./routes/Home/Index";
import AboutRoute from "./routes/About/Index";

function App() {
    return (
        <Routes>
            <Route path="/" element={<IndexRoute />} />
            <Route path="/about" element={<AboutRoute />} />
        </Routes>
    );
}

export default App;
