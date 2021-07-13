import React from 'react';
import Card from 'react-bootstrap/Card';

export interface IMovieCard {
    Title: string,
    Year: string,
    Type:string,
    Poster: string
}

/**
 * React Functional Component - MovieCard
 *
 * @param {*} { title, poster, year, type }
 * @return {*} returns a card 
 */
const MovieCard: React.FC<IMovieCard> = ({ Title, Poster, Year, Type }) => {
    return <Card className='movie_card'>
        <Card.Img variant="top" src={Poster} />
        <Card.Body className='movie_card_body'>
            <Card.Title >{Title}</Card.Title>
            <Card.Text>{Year}</Card.Text>
            <Card.Text>{Type}</Card.Text>
        </Card.Body>
    </Card>;
}

export default MovieCard;