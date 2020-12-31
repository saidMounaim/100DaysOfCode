import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import FavouritePage from './screens/FavouritePage';
import HomePage from './screens/HomePage';

const initialState = {
  favourite: [],
}

console.log(initialState)

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/favourite" component={FavouritePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
