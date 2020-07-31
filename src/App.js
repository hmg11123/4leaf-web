import React from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Header, Footer, Main } from "./screens"

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Router>

                    <header>
                        <div className="header">
                            <Route exact path="/" component={Header} />
                        </div>
                    </header>
                    <main>
                        <div className="main">
                            <Route exact path="/" component={Main} />
                        </div>
                    </main>
                    <footer>
                        <div className="footer">
                            <Route exact path="/" component={Footer} />
                        </div>
                    </footer>
                </Router>
            </div>
        );
    }
}

export default App;