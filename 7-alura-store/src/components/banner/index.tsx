import s from './Banner.module.scss';

export default function Banner( imgPath : string){
    return(
        <img className={s.imagem} src={imgPath[0]} alt='Banner' />
    )
}