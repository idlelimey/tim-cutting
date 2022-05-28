import { lazy, createContext, useEffect, useState, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';

import './App.scss';
import CV from './Pages/CV';
import Home from './Pages/Home';
import Header from './Components/Header';
import NotFound from './Pages/404';
import Footer from './Components/Footer';
import { HelmetProvider } from 'react-helmet-async';

const Tools           = lazy(() => import('./Pages/Tools'));
const DownloadCalc    = lazy(() => import('./Components/Tools/DownloadCalculator'));
const PasswordEntropy = lazy(() => import('./Components/Tools/PasssordEntropy'));
const Contrast        = lazy(() => import('./Components/Tools/Contrast'));
const Gradient        = lazy(() => import('./Components/Tools/Gradient'));
const YourWeightIn    = lazy(() => import('./Components/Tools/YourWeightIn'));

export const ThemeContext = createContext();

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
                <HelmetProvider>
                    <div className={`app${theme === 'dark' ? ' dark-mode' : ''}`}>
                        <Header setTheme={setTheme} theme={theme} />
                        <main>
                            <div className="content">
                                <Suspense fallback={<div className="p-5">Loading...</div>}>
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/cv" element={<CV />} />
                                        <Route path="/tools" element={<Tools />} />
                                        <Route path="/tools/download-calculator" element={<DownloadCalc />} />
                                        <Route path="/tools/contrast-ratio" element={<Contrast />} />
                                        <Route path="/tools/password-entropy" element={<PasswordEntropy />} />
                                        <Route path="/tools/css-gradient-generator" element={<Gradient />} />
                                        <Route path="/tools/your-weight-in" element={<YourWeightIn />} />
                                        <Route path="*" element={<NotFound />} />
                                    </Routes>                                
                                </Suspense>
                            </div>
                            <Footer />
                        </main>
                    </div>
                </HelmetProvider>
            </ThemeContext.Provider>
        </Router>
    );
}

export default App;
