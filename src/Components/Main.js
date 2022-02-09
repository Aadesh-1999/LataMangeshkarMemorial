import React from 'react';
import { Header } from './Header';
import './styles/Main.css';
import { Link } from "react-router-dom";
export const Main = () => {
    return (<div >
        <Header />
        <div className='acheivements d-flex justify-content-center row'>
            <h1 className='m-5 px-5 heading'>Acheivements</h1>
            <div className="facts d-flex justify-content-center px-5 row">
                <h3 className='col-12 col-md-6 '><q>Bharat Ratna - 2001</q><hr/></h3>
                <h3 className='col-12 col-md-6 '><q>Padma Vibhushan - 1999</q><hr/></h3>
                <h3 className='col-12 col-md-6 '><q>Padma Bhushan - 1969</q><hr/></h3>
                <h3 className='col-12 col-md-6 customLink '><Link to='/facts'><q>More Acheivements of Lata Ji...</q></Link><hr/></h3>
            </div>
        </div>
        <div className='facts d-flex justify-content-center row'>
        <h1 className='m-5 px-5 heading'>Facts</h1>
            <div className="facts d-flex justify-content-center px-5 row">
                <h3 className='col-12 col-md-6 '><q>One of the best-known and Most respected playback singers in India</q><hr/></h3>
                <h3 className='col-12 col-md-6 '><q>Eight-decade long career of playback singing</q><hr/></h3>
                <h3 className='col-12 col-md-6 '><q>First voice of Indian film and the most recorded singing artist in history.</q><hr/></h3>
                <h3 className='col-12 col-md-6 customLink'><Link to='/facts'><q>Know More Facts About Lata Ji...</q></Link><hr/></h3>
            </div>
        </div>
        <div className='facts d-flex justify-content-center row'>
        <h1 className='m-5 px-5 heading'>Famous Songs</h1>
            <div className="facts d-flex justify-content-center px-5 row">
                <h3 className='col-12 col-md-6 '><iframe width="100%" height="100%" src="https://www.youtube.com/embed/-NCdeldQLFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><hr/></h3>
                <h3 className='col-12 col-md-6 '><iframe width="100%" height="100%" src="https://www.youtube.com/embed/-NCdeldQLFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><hr/></h3>
                <h3 className='col-12 col-md-6 '><iframe width="100%" height="100%" src="https://www.youtube.com/embed/-NCdeldQLFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><hr/></h3>
                <h3 className='col-12 col-md-6 customLink d-flex justify-content-center align-items-center py-3'><Link to='/facts'><q>Listen to more songs of Lata Ji...</q></Link><hr/></h3>
            </div>
        </div>
    </div>);
};
