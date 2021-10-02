import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import APIContextProvider from './helper/APIContextProvider';
import Header from './layout/Header';
import Manage from './layout/Manage';
import Trader from './layout/Trader';

const App = () => {

  return (
    <Router>
      <APIContextProvider>
        <Header />
        <Route path='/' exact render={(props) => (
          <Manage />
        )}
        />
        <Trader/>
      </APIContextProvider>
    </Router>
  )
}

export default App
