import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import store from './store'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Page } from './pages/Page'
import { NoRoute } from './pages/NoRoute'
import { addMenuItem } from './store/actions'

store.dispatch(
    addMenuItem(
        {
            label: 'Home',
            path: '/',
            active: false
        }
    )
)

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route
                            path="/page/:id"
                            render={({ match }) => <Page id={match.params.id} />}
                        />
                        <Route component={NoRoute} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
