import './App.css';
import {Helmet} from "react-helmet";
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Destination from './routes/destination/Destination';
import Crew from './routes/crew/Crew';
import Technology from './routes/technology/Technology';

function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="description" content="Helmet application" />
        <title>Space Toursim</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/destinations'>
          <Destination/>
        </Route>
        <Route path='/crew'>
          <Crew/>
        </Route>
        <Route path='/technology'>
          <Technology/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
