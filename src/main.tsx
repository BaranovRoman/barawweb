import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./components/layout/Header/Header.tsx";
import Footer from "./components/layout/Footer/Footer.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <App />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
