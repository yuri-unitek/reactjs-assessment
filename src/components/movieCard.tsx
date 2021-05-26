import React from 'react';
import Card from 'react-bootStrap/Card';

export interface IMovieCard {
    title: string,
    year: string,
    type:string,
    poster: string
}

/**
 * React Functional Component - MovieCard
 *
 * @param {*} { title, poster, year, type }
 * @return {*} returns a card 
 */
const MovieCard: React.FC<IMovieCard> = ({ title, poster, year, type }) => {
    return <Card className='movie_card'>
        <Card.Img variant="top" src={poster} />
        <Card.Body className='movie_card_body'>
            <Card.Title >{title}</Card.Title>
            <Card.Text>{year}</Card.Text>
            <Card.Text>{type}</Card.Text>
        </Card.Body>
    </Card>;
}

export default MovieCard;