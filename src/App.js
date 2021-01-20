import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import './App.scss';
import CV from './Pages/CV';
import Home from './Pages/Home';
import Header from './Components/Header';
import NotFound from './Pages/404';
import Footer from './Components/Footer';
import Tools from './Pages/Tools';
import DownloadCalc from './Components/Tools/DownloadCalculator';
import PasswordEntropy from './Components/Tools/PasssordEntropy';
import Contrast from './Components/Tools/Contrast';

export const ThemeContext = React.createContext();

function App() {
    !localStorage.getItem('Theme') && localStorage.setItem(
        'Theme', 
        window.matchMedia('(prefers-color-scheme: light)').matches ? 'light': 'dark'
    );
    const [theme, setTheme] = useState(localStorage.getItem('Theme'));
    
    useEffect(() => {
        localStorage.setItem('Theme', theme);
    }, [theme]);

    return (
        <Router>
            <ThemeContext.Provider value={theme}>
                <div className={`app${theme === 'dark' ? ' dark-mode' : ''}`}>
                    <Header setTheme={setTheme} theme={theme} />
                    <main>
                        <div className="content">
                            <Switch>
                                <Route path="/tim-cutting/" exact component={Home} />
                                <Route path="/tim-cutting/cv" component={CV} />
                                <Route path="/tim-cutting/tools" exact component={Tools} />
                                <Route path="/tim-cutting/tools/download-calculator" exact component={DownloadCalc} />
                                <Route path="/tim-cutting/tools/contrast-ratio" exact component={Contrast} />
                                <Route path="/tim-cutting/tools/password-entropy" exact component={PasswordEntropy} />
                                <Route path="/tim-cutting/404" component={NotFound} />
                                <Redirect to="/tim-cutting/404" />
                            </Switch>
                        </div>
                        <Footer />
                    </main>
                </div>
            </ThemeContext.Provider>
        </Router>
    );
}

export default App;
