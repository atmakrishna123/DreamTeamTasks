import React from 'react';
import { useRouter } from 'next/router';
import Login from '../components/Login';
import SignIn from '../components/SignIn';
const Layout = () => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <div>
            {pathname === '/signin' ? <SignIn /> : <Login />}
        </div>
    );
};
export default Layout;
