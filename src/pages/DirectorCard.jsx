
import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

function DirectorCard() {
    const { directorId } = useParams();
    const [director, setDirector] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:4000/directors/${directorId}`)
            .then(r => r.ok ? r.json() : null)
            .then(setDirector)
            .catch(() => setDirector(null));
    }, [directorId]);

    if (!director) {
        return <h2>Director not found.</h2>;
    }

    return (
        <div>
            <h2>{director.name}</h2>
            <p>{director.bio}</p>
            <h3>Movies:</h3>
            <ul>
                {director.movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to={`movies/new`}>Add New Movie</Link>
            <Outlet />
        </div>
    );
}

export default DirectorCard;
