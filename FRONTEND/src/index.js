import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers/index";
import { PopupProvider } from "./contexts/popupContext";
import { EventDataProvider } from "./contexts/eventDataContext";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<CookiesProvider>
				<EventDataProvider>
					<PopupProvider>
						<App />
					</PopupProvider>
				</EventDataProvider>
			</CookiesProvider>
		</Provider>
	</BrowserRouter>
);

reportWebVitals();
