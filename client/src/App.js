import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

function App() {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/component/server', { replace: true });
        }
    }, []);

    return (
        <div className="appWrapper">
            <div className="App">
                <Navbar />
                <div className="appContent">
                    <Routes>
                        <Route exact path='/component/:componentType' element={<Content />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
