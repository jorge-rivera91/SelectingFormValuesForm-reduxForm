import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import SelectingFormValuesForm from "./SelectingFormValuesForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Selecting Form Values Example</h2>
      <SelectingFormValuesForm onSubmit={showResults} />
      <Values form="selectingFormValues" />
    </div>
  </Provider>,
  rootEl
);
