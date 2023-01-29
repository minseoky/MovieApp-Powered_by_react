import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../css/styles_Movies.module.css";
function Movies({title, coverImg, summary, genres, id}) {
    const no_summary = "It looks like we don't have a Synopsis for this title yet. Be the first to contribute! Just click the \"Edit page\" button at the bottom of the page or learn more in the Synopsis submission guide.";

    return(
        <div className={styles.movies}>
            <Link to={`detail/${id}`}><img className={styles.img} src={coverImg} alt="movie_img"/></Link>
            <h2 style={{fontSize: "0px"}}><Link to={`detail/${id}`}>{title}</Link></h2>
            <div className={styles.onlyWeb}>
                <p>{summary !== no_summary ? summary : "Sorry, There is no summary yet."}</p>
                <ul>

                    {genres && genres.map((genre) =>
                        <li key={genre}>{genre}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

Movies.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movies;