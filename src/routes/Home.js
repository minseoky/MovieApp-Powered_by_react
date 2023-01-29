import Movies from "../components/Movies";
import {useEffect, useState} from "react";
import styles from "../css/styles_Home.module.css";


function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(1);

    const getMovies = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=rating&limit=18&page=${pages}`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);

    }
    useEffect(() => {
        getMovies();
    }, [])
    console.log(movies);
    return(
        <div className={styles.home}>
            <div className={styles.title}>
                SC Movie
            </div>
            <div className={styles.list}>
                {loading ?
                    <h1>Loading...</h1>
                    : <div>{movies.map((movie) =>
                        <Movies
                            key={movie.id}
                            id = {movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    )}
                    </div>}
            </div>
            <div className={styles.by}>
                {loading ? null:
                    <span>by <a className={styles.link} href={"https://github.com/minseoky/MovieApp-Powered_by_react"}>minseoky</a>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png?20180806170715"
                        alt="github"
                        className={styles.githubimg}
                    />
                </span>
                }
            </div>
        </div>
    )
}

export default Home;