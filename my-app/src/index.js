import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const url = "api.census.gov/data/timeseries/eits/hv?get=cell_value,data_type_code,time_slot_id,category_code,seasonally_adj&time=2004";
const response = fetch(url, {credentials:'omit'}); 
response.then(data => data.json()).then(data => console.log(data.dataset))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
