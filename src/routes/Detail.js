import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "../css/styles_Detail.module.css";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState([]);
    const {id} = useParams();

    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setLoading(false);
        setDetails(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    }, [])

    console.log(details);
    return (
        <div className={styles.detail}>
            <div className={styles.title}>
                SC Movie
            </div>
            {loading ? <h1>Loading...</h1> :
                <MovieDetail
                    coverImg={details.medium_cover_image}
                    title={details.title}
                    rating={details.rating}
                    code={details.yt_trailer_code}
                    description={details.description_full}
                    genres={details.genres}
                />
            }
        </div>
    )
}

export default Detail;