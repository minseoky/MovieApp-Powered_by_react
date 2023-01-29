import styles from "../css/styles_MovieDetail.module.css";
import PropTypes from "prop-types";

function MovieDetail({coverImg, title, rating, code, description, genres}) {
    console.log(genres);
    return(
        <div className={styles.main}>
            <img className={styles.img} src={coverImg} alt="img"/>
            <h1>{title}</h1>
            <div className={styles.ratingAndGenres}>
                <div className={styles.ratingContainer}>
                    <span>Rating : </span>
                    <span>{rating}</span>
                </div>
                <div className={styles.genreContainer}>
                    <span>Genres : </span>
                        {genres && genres.map((genre, index) =>
                            <span className={styles.list} key={genre}>{genre}{genres.length-1 !== index ? <span>,&nbsp;</span> : null} </span>)
                        }
                </div>
            </div>
            <iframe className={styles.trail} src={`https://www.youtube.com/embed/${code}?mute=1&&autoplay=1`}></iframe>
            <div className={styles.description}>
                <h2>Description</h2>
                <p>{description ? description : <p>Sorry, there's no description</p>}</p>
            </div>
        </div>
    )
}

MovieDetail.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    code : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}
export default MovieDetail;