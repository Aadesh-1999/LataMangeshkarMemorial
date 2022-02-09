import React from 'react';
import { Header } from './Header';
import './styles/Main.css';
import { Link } from "react-router-dom";
export const Main = () => {
    return (<div >
        <Header />
        <div className='acheivements d-flex justify-content-center row'>
            <h1 className='m-5 p-5'>Acheivements</h1>
            <div className="facts d-flex justify-content-center px-5 row">
                <h3 className='col-12 col-md-6 '><q>Bharat Ratna - 2001</q><hr/></h3>
                <h3 className='col-12 col-md-6 '><q>Padma Vibhushan - 1999</q><hr/></h3>
                <h3 className='col-12 col-md-6 '><q>Padma Bhushan - 1969</q><hr/></h3>
                <h3 className='col-12 col-md-6 customLink '><Link to='/facts'><q>More Acheivements of Lata Ji...</q></Link><hr/></h3>
            </div>
        </div>
        <div className='facts d-flex justify-content-center row'>
        <h1 className='m-5 p-5'>Facts</h1>
            <div className="facts d-flex justify-content-center px-5 row">
                <h3 className='col-12 col-md-6 '><q>One of the best-known and Most respected playback singers in India</q><hr/></h3>
                <h3 className='col-12 col-md-6 '><q>Eight-decade long career of playback singing</q><hr/></h3>
                <h3 className='col-12 col-md-6 '><q>First voice of Indian film and the most recorded singing artist in history.</q><hr/></h3>
                <h3 className='col-12 col-md-6 customLink'><Link to='/facts'><q>Know More Facts About Lata Ji...</q></Link><hr/></h3>
            </div>
        </div>
        <div className='facts d-flex justify-content-center row'>
        <h1 className='m-5 p-5'>Famous Songs</h1>
            <div className="facts d-flex justify-content-center px-5 row">
                <h3 className='col-12 col-md-6 '><q>One of the best-known and Most respected playback singers in India</q><hr/></h3>
                <h3 className='col-12 col-md-6 '><q>Eight-decade long career of playback singing</q><hr/></h3>
                <h3 className='col-12 col-md-6 '><q>First voice of Indian film and the most recorded singing artist in history.</q><hr/></h3>
                <h3 className='col-12 col-md-6 customLink'><Link to='/facts'><q>Know More Facts About Lata Ji...</q></Link><hr/></h3>
            </div>
        </div>
    </div>);
};
