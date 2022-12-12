import React, { useEffect, useState } from "react";
import { UserData } from "./Data";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";



// <block:setup:1>
function LineChart({ chartData }) {
  const [populationArray, setPopulationArray]= useState([]);
  useEffect (() => {
    UserData.forEach(Country=>setPopulationArray([...populationArray, Country["Population (2022)"]])) 
  },[]);
  const [countryArray, setcountryArray]= useState([]);
  useEffect (() => {
    UserData.forEach(Country=>setcountryArray([...countryArray, Country["Country (or dependency)"]])) 
  },[]);
  const labels = countryArray;
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: populationArray,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  // </block:setup>
  
  // <block:config:0>
  const config = {
    type: 'line',
    data: data,
  };
  // </block:config>
  
  module.exports = {
    actions: [],
    config: config,
  }; 

  return < Line data ={chartData}/>;
}

export default LineChart; 
