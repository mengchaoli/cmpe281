//import React from "react";
import namor from "namor";
import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: Math.floor(Math.random() * 30),//namor.generate({ words: 1, numbers: 0 }),
    light: Math.floor(Math.random() * 30),
    
    progress: Math.floor(Math.random() * 100),
    temperature:Math.floor(Math.random() * 100),
    status: 
      statusChance > 0.66
        ? "on"
        : statusChance > 0.33 ? "broken" : "off"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}



