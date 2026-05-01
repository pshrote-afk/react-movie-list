import MovieCard from "../components/MovieCard"
import { useState, useEffect} from "react"
import {getPopularMovies, searchMovies} from "../services/api"; 
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // default value
    // name of state, function to update state

    const [movies, setMovies] = useState([]);
    // we're going to store movies in state so that they persist

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try
            {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }catch(error)
            {

                console.log(error);
                setError("Failed to load movies...");
            }
            finally 
            {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = (ev) => {
        ev.preventDefault();
        alert('Something');    
        setSearchQuery(searchQuery);   
    }

    return ( 
        <div className="home">
            <form onSubmit={handleSearch} className="search-name">
                <input type="text" placeholder="Search movies..." className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}>
                </input>
                <button type="submit" className="search-button">Search
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading 
            ? <div className="loading">Loading...</div> 
            : <div className="movie-grid">
                {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery) && ( <MovieCard movie={movie} key={movie.id} />))}
            </div>
            }
    </div>
    );
}

export default Home;