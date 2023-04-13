import PaginaPadrao from 'components/PaginaPadrao';
import Carrinho from 'pages/Carrinho';
import DetalheProduto from 'components/detalheProduto';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Pc from 'pages/Pc';
import Playstation from 'pages/Playstation';
import Xbox from 'pages/Xbox';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Home />}/>
                    <Route path='xbox' element={<Xbox />}/>
                    <Route path='pc' element={<Pc />}/>
                    <Route path='playstation' element={<Playstation />}/>                    
                    <Route path='DetalheProduto/:id' element={<DetalheProduto />}/>                                  
                    <Route path='carrinho' element={<Carrinho />}/>                                  
                    <Route path='*' element={<NotFound />}/>                                  
                </Route>
            </Routes>
        </Router>
    )
}