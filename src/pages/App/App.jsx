// App.jsx
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Navbar from '../../components/Navbar/Navbar';
import SignupPage from '../SignupPage/SignupPage';
import MainPage from "../MainPage";
import HomePage from "../HomePage";
import WelcomePage from "../WelcomePage/welcome";
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage setUser={setUser} />} />
        {user ? (
          <>
            
            <Route path="/main" element={<MainPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<SignupPage setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
}
