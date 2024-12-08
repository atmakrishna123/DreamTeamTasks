import React from 'react';
import {useRouter} from 'next/router';
import Navbar from '../components/Navbar';
import MainBody from '../components/MainBody';
import Posters from '../components/Posters';
import Letterboxdfeatures from '../components/Letterboxdfeatures';
import About from '../components/about';
const HomePage=()=>{
    const router = useRouter();
    const redirectToLogin = () => {
        router.push('/login'); 
    };
    const redirectToSignin=()=>{
        router.push('/signin');
    }
    return(
        <div>
            <Navbar/>
            <MainBody/>
            <Posters/>
            <hr/>
            <Letterboxdfeatures/>
            <About/>
        </div>
    );
};
export default HomePage;