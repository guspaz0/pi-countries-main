import React from 'react';
import Card from './card';
import { CardStyle } from '../CSS';

export default function Home(props) {


    return (
        <>
        <h2>Home Component</h2>
        <CardStyle>
        {props.countries?.map((e) => {
            return <Card key={e.id} country={e}/>
        })}
        </CardStyle>
        </>
    )
}