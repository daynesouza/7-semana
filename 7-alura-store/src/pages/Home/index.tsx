import Banner from 'components/banner';
import s from './Home.module.scss';

export default function Home(){

    const bannerPath = '/assets/img/Home/banner.jpg';

    return(
        <main className={s.main}>
            <Banner imgPath = {bannerPath}/>
        </main>
    );
}