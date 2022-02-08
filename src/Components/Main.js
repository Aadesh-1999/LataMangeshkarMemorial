import React from 'react';
import { Header } from './Header';
import './styles/Main.css';
import { Link } from "react-router-dom";
export const Main = () => {
    return (<div className='row'>
        <Header />
        <div className='factsAndAcheivements row d-flex justify-content-center'>
            <div className="facts col d-flex justify-content-center p-5 row">
                <h3 className='py-3'><q>One of the best-known and Most respected playback singers in India</q></h3><br /><hr />
                <h3 className='py-3'><q>Eight-decade long career of playback singing</q></h3><br /><hr />
                <h3 className='py-3'><q>First voice of Indian film and the most recorded singing artist in history.</q></h3><br /><hr />
            </div>
            <div className="acheivements col d-flex justify-content-center align-items-center p-5 row">
                <h3 className='py-3 d-flex  align-items-center'><q>Lata Mangeshkar last recorded a song in 2019</q></h3><br /><hr />
                <h3 className='py-3 d-flex  align-items-center'><q>Got Featured in Guiness Book Of World Record</q></h3><br /><hr />
                <h3 className='customLink py-3 d-flex justify-content-start align-items-center'><Link to='/facts'><q>Know More Facts About Lata Ji...</q></Link></h3><br /><hr />
            </div>
        </div>
    </div>);
};
