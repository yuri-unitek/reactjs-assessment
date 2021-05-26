import * as React from "react";
import {shallow} from 'enzyme';
import CardContainer, { ICardContainerProps } from '../../src/components/cardContainer';
import { IMovieCard } from "../../src/components/movieCard";

describe('cardContainer component Tests',()=>{
    it('should render info', () => {
        const props: ICardContainerProps ={
           data: genFakeData()
        }
        const container = shallow(<CardContainer {...props}/>);
        expect(container.exists()).toBe(true);
    });
});

function genFakeData(){
    const data = []
    const movie:IMovieCard = {title:'title',poster:'img',type:'type',year:'2020'};
    for(var i=0; i< 10; i++){
        data.push(movie);
    }
    return [];
}