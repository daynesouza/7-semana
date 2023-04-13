import { selector, useRecoilValue } from "recoil";
import { listaDeComprasState } from 'state/atom';

export const countCarrinho = selector({
    key: 'countCarrinho',
    get: ({get}) => {
        const listaDeCompras = get(listaDeComprasState);

        return listaDeCompras.length
    }
})