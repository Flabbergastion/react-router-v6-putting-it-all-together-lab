
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import DirectorContainer from './pages/DirectorContainer';
import DirectorForm from './pages/DirectorForm';
import DirectorList from './pages/DirectorList';
import DirectorCard from './pages/DirectorCard';
import MovieForm from './pages/MovieForm';
import MovieCard from './pages/MovieCard';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/directors" element={<DirectorContainer />}>
                    <Route index element={<DirectorList />} />
                    <Route path="new" element={<DirectorForm />} />
                    <Route path=":directorId" element={<DirectorCard />}>
                        <Route path="movies/new" element={<MovieForm />} />
                        <Route path="movies/:movieId" element={<MovieCard />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
