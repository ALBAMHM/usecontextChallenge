import React, { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

const Button = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Alternar tema
        </button>
    );
};

export default Button;