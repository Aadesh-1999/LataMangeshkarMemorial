import React from 'react';
import { Header } from './Header';
import './styles/Main.css';
import { Link } from "react-router-dom";
export const Main = () => {
    return (<div >
        <Header />
        <div className='factsAndAcheivements d-flex justify-content-center'>
            <div className="facts d-flex justify-content-center p-5 row">
                <h3 className='col-12 col-md-6 py-3'><q>One of the best-known and Most respected playback singers in India</q><hr/></h3>
                <h3 className='col-12 col-md-6 py-3'><q>Eight-decade long career of playback singing</q><hr/></h3>
                <h3 className='col-12 col-md-6 py-3'><q>First voice of Indian film and the most recorded singing artist in history.</q><hr/></h3>
                <h3 className='col-12 col-md-6 py-3'><q>Lata Mangeshkar last recorded a song in 2019</q><hr/></h3>
                <h3 className='col-12 col-md-6 py-3'><q>Got Featured in Guiness Book Of World Record</q><hr/></h3>
                <h3 className='col-12 col-md-6 customLink py-3'><Link to='/facts'><q>Know More Facts About Lata Ji...</q></Link><hr/></h3>
            </div>
        </div>
    </div>);
};
