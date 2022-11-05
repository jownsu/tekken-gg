import './sass/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Fighters from './pages/Fighters';

function App() {
    return (
        <>
            <Router>
            <Navigation />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/fighters' element={<Fighters />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
