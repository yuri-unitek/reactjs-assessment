// import React from 'react';
import Container from 'react-bootStrap/Container';
import Row from 'react-bootStrap/Row';
import Col from 'react-bootStrap/Col';
import MovieCard, { IMovieCard } from "./movieCard";

export interface ICardContainerProps {
    data: IMovieCard[];
}
/**
 * React Functional Component - CardContainer
 *
 * @param {*} { data }
 * @return {*} returns a cardContainer
 */
const CardContainer: React.FC<ICardContainerProps> = ({ data }) => {

    const firstFive = data.slice(0, 5);
    const secondFive = data.slice(5);
    console.log(data);
    const row1 = <Row className='card_container_row'>{firstFive.map((item, idx) => {
        return (
            <Col key={idx}>
                <MovieCard
                    key={idx}
                    Title={item.Title}
                    Poster={item.Poster}
                    Year={item.Year}
                    Type={item.Type}
                />
            </Col>
        );
    }
    )}
    </Row>;
    const row2 = <Row className='card_container_row'>{secondFive.map((item, idx) => {

        return (
            <Col key={idx}>
                <MovieCard
                    key={idx}
                    Title={item.Title}
                    poster={item.poster}
                    Year={item.Year}
                    type={item.type}
                />
            </Col>
        );
    }
    )}
    </Row>;

    return <Container fluid >
        {row1}
        {row2}
    </Container>;
}

export default CardContainer;