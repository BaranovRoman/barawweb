import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./components/layout/Header/Header.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);