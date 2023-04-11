import Footer from 'components/footer';
import Header from 'components/header';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}