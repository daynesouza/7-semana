import { useRecoilValue } from 'recoil';
import s from './DetalheProduto.module.scss';
import { listaDeProdutosState } from 'state/atom';
import { useParams } from 'react-router-dom';

export default function DetalheProduto() {
    const { id } = useParams();
    const produtos = useRecoilValue(listaDeProdutosState);
    const produto = produtos.find(item => item.id === Number(id));

    

    if (!produto) {
        return (<h2>Não encontrado</h2>);
    } else {
        return (
            <div className={s.produto}>
                <div className={s.produto__imagem__container}>
                    <img src={produto.photo} alt={produto.name} />
                </div>
                <div className={s.produto__descricao}>
                    <h2>{produto.name}</h2>
                    <h2>Plataforma {produto.category.label}</h2>
                    <h3>{produto.price.toFixed(2)}</h3>
                </div>
            </div>
        );
    }
}