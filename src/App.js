import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';
import {Category} from './pages/Category';
import {Recipe} from './pages/Recipe';



function App() {
  return (
   <>
  <Router>
       <Header/>
         <main className='container content'>
            <Switch>
              <Route exact path="/" component={Home} />   
              <Route path="/about" component={About} />       
              <Route path="/contact" component={Contact} />
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
