import * as React from "react";
import {shallow} from 'enzyme';
import MovieCard, { IMovieCard } from "../../src/components/movieCard";

describe('MovieCard component Tests',()=>{
    it('should render info', () => {
        const props: IMovieCard = {title:'title',poster:'img',type:'type',year:'2020'};
        const movie = shallow(<MovieCard {...props}/>);
        expect(movie.exists()).toBe(true);
    });
});