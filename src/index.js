import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { customTheme } from './Style/theme';
import { Provider } from 'react-redux';
import { store } from './App/Store';

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<ChakraProvider resetCSS theme={customTheme}>
			<App />
		</ChakraProvider>
	</Provider>
);