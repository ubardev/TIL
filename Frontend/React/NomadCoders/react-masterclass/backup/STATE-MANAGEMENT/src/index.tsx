import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient } from "react-query";
import {RecoilRoot} from "recoil";
import {darkTheme} from "./theme";
import {ThemeProvider} from "styled-components";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
