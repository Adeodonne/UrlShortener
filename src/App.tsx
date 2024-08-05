import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import LoginPage from "./Pages/LoginPage/LoginPage";
import LinksPage from "./Pages/LinksPage/LinksPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import RedirectPage from "./Pages/RedirectPage/RedirectPage";
import './App.scss';

function App() {
    return (
        <Router>
            <nav className="main-nav">
                <ul>
                    <li><Link to="/links">Links</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/auth">Login</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Navigate to="/auth" />} />
                <Route path="/auth" element={<LoginPage />} />
                <Route path="/links" element={<LinksPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<RedirectPage />} />
            </Routes>
        </Router>
    );
}

export default App;
