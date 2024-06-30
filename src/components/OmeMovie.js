import './OneMovie.css'
import { useParams } from 'react-router-dom'
import movies from '../data'
import { NavLink } from 'react-router-dom'

const OmeMovie = () => {

    const {movieId} = useParams()
    const oneSpecificMovie = movies.find((omeMovie) => {
        return omeMovie.id === parseInt(movieId)
    })

    const { image, title, description, tags } = oneSpecificMovie

    return <section className="one-movie-box">
    <h2>{title}</h2>
    <img src={image} alt="" />
    <p>{description}</p>
    <p>{tags}</p>
    <NavLink to="/movies">Zpět na všechny filmy</NavLink>
</section>
}

export default OmeMovie