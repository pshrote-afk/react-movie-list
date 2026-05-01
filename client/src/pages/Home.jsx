import MovieCard from "../components/MovieCard"
import {useState} from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // default value
    // name of state, function to update state

    const movies = [
        {id:1, title: "John Wick", release_date: "2020"},
        {id:2, title: "John Sick", release_date: "2021"},
        {id:3, title: "Shrek", release_date: "2022"}
    ];

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

            <div className="movie-grid">
                {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery) && ( <MovieCard movie={movie} key={movie.id} />))}
            </div>
    </div>
    );
}

export default Home;