import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';
import {Category} from './pages/Category';
import {Recipe} from './pages/Recipe';



function App() {
  return (
   <>
  <Router basename='/React_SPA_Food_Final_GH_Pages'>
       <Header/>
         <main className='container content'>
            <Switch>
              <Route exact path="/" component={Home} />         
              <Route path="/category/:name" component={Category} />
              <Route path="/meal/:id" component={Recipe} />
              <Route component={NotFound} />
            </Switch>       
         </main>
       <Footer />
  </Router>
   </>
  );
}

export default App;
