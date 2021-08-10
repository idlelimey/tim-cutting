import React, { useEffect, useState, Suspense } from 'react';
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

const Tools           = React.lazy(() => import('./Pages/Tools'));
const DownloadCalc    = React.lazy(() => import('./Components/Tools/DownloadCalculator'));
const PasswordEntropy = React.lazy(() => import('./Components/Tools/PasssordEntropy'));
const Contrast        = React.lazy(() => import('./Components/Tools/Contrast'));
const Gradient        = React.lazy(() => import('./Components/Tools/Gradient'));
const YourWeightIn    = React.lazy(() => import('./Components/Tools/YourWeightIn'));

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
                            <Suspense fallback={<div className="p-5">Loading...</div>}>
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/cv" component={CV} />
                                    <Route path="/tools" exact component={Tools} />
                                    <Route path="/tools/download-calculator" exact component={DownloadCalc} />
                                    <Route path="/tools/contrast-ratio" exact component={Contrast} />
                                    <Route path="/tools/password-entropy" exact component={PasswordEntropy} />
                                    <Route path="/tools/css-gradient-generator" exact component={Gradient} />
                                    <Route path="/tools/your-weight-in" component={YourWeightIn} />
                                    <Route path="/404" component={NotFound} />
                                    <Redirect to="/404" />
                                </Switch>                                
                            </Suspense>
                        </div>
                        <Footer />
                    </main>
                </div>
            </ThemeContext.Provider>
        </Router>
    );
}

export default App;
