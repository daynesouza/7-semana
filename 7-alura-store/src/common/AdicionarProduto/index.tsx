import carrinho from 'components/carrinho';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { listaDeComprasState, saldoTotalState } from 'state/atom';
import { Icarrinho } from 'types/carrinho';



export default function adicionarCarrinho(produtoCarrinho: Icarrinho) {
    const carrinho = useRecoilValue(listaDeComprasState);
    const setCarrinho = useSetRecoilState(listaDeComprasState);

    const saldo = useRecoilValue(saldoTotalState);
    const setSaldo = useSetRecoilState(saldoTotalState);

    function atualizaCarrinho() {
        if (verificaCarrinhoVazio()) {
            setCarrinho([produtoCarrinho])
            setSaldo(saldo + produtoCarrinho.price)
        } else {
            atualizaQuantidadeItem();
        }

    }

    function atualizaQuantidadeItem() {
        let carrinhoAtual: Icarrinho[];
        let quantidade;

        carrinho.map((item) => {
            if (item.id = produtoCarrinho.id) {
                quantidade = item.quantidade + produtoCarrinho.quantidade
                carrinhoAtual.push({ 
                    name: item.name,
                    photo: item.photo,
                    price: item.price,
                    id: item.id,
                    quantidade: quantidade 
                })
            } else {
                carrinho.push(item)
            }
        })
    }

    function verificaCarrinhoVazio() {
        if (carrinho.length === 0) {
            return true
        }
    }

    return atualizaCarrinho
}

