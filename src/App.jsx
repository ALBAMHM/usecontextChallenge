import './App.css'; // Archivo de estilos CSS
import React, { useContext } from 'react';
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider, ThemeContext } from './themes/ThemeContext';


const AppWrapper = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`App ${theme}`}>
            <RoutesApp />
        </section>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <AppWrapper />
        </ThemeProvider>
    );
};

export default App;