import React from 'react';
import { NextPage } from 'next';
import InputForm from '../components/inputForm';
import { useRef } from 'react';
import Router from 'next/router';


/**
 * NextPage - Index
 *
 * @return {*} returns a Index page - inputform
 */
const Index: NextPage = () => {
    
    const movieRef = useRef();

    const confirmClick = (e) => {
        e.preventDefault();
        let searchQuery:string = (movieRef as any).current.value;
        Router.push({
            pathname: `/results/1`,
            query: { q:searchQuery },
          });
    };
  
    return <div className="index_container">
        <InputForm movieRef={movieRef} confirmClick={confirmClick} className='index'/>
    </div>;
}

export default Index;