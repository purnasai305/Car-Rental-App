import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "./redux/Store"

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(store.getState())
root.render(

  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>

);

reportWebVitals();
