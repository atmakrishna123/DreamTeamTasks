import React from 'react';
import SearchBox from './SearchBox';
import {useRouter} from 'next/router';
const Navbar=()=>{
    const router=useRouter();
    return(
        <nav className="navigationBar">
            <div className="mainDiv">
                <img src="/images/logo-black.png" className="letterbocdImage" alt="Letterboxd Logo"/>
                <div className="navBar">
                    <button className="signIn" onClick={() => router.push('/signin')}>SIGN IN</button>
                    <button className="createAccount" onClick={() => router.push('/login')}>CREATE ACCOUNT</button>
                    <button className="films" onClick={() => router.push('/FilmPage')}>FILMS</button>
                    <button className="lists">LISTS</button>
                    <button className="members">MEMEBERS</button>
                    <button className="journal">JOURNAL</button>
                </div>
            </div>
            <SearchBox/>
        </nav>
    );
};
export default Navbar;