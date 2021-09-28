import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import ResponsiveDrawer from './ResponsiveDrawer';
import { Route } from 'react-router-dom';
import Bank from './components/Bank';
import axios from 'axios';

const App = () => {
    const [data, setData] = React.useState([]);

    const fetchData = () => {
        axios.get("http://127.0.0.1:8000/api/bank/").then(res => {
            console.log(res);
            setData(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <ResponsiveDrawer >
            <HashRouter>
                <div>
                    <Route path='/' exact render={(props) => (
                        <>
                            <Bank group={1} banks={data} />
                        </>
                    )}
                    />
                </div>
            </HashRouter>
        </ResponsiveDrawer>
    )
}

export default App
