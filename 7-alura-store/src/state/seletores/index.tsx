import { selector } from "recoil";
import { Iproduto } from "types/produto";
import produtos from '../../../db.json';

export const produtosAsync = selector({
    key: 'produtosAsyn',
    get: async () => {
        return produtos;
    }
    /* get: async () => {
        const respostaHttp = await fetch('http://localhost:8080/produtos')
        const produtosJson: Iproduto[] = await respostaHttp.json()
        return produtosJson
    } */
})
