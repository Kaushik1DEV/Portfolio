import React from 'react';

import ReactDom from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';
import {theme} from './themes/theme';
import './index.css';
ReactDom.render(<ThemeProvider theme={theme}> <App/>
</ThemeProvider>,document.getElementById('root'));