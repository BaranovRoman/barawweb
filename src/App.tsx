import "./css/app.scss";
import { Route, Routes } from "react-router-dom";
import IndexRoute from "./routes/Home/Index";
import AboutRoute from "./routes/About/Index";

function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<IndexRoute />} />
                <Route path="/about" element={<AboutRoute />} />
            </Routes>
        </div>
    );
}

export default App;
