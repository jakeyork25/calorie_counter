import React, { useState } from "react";
import './index.css';
import { Result } from './components/Result';
import { Adjust } from './components/Adjust';

export const App = () => {
  const data = [
    { name: "PB", calories: 180, fat: 15, carbs: 8, protein: 7 },
    { name: "Bread", calories: 60, fat: .5, carbs: 11, protein: 4 },
    { name: "Eggs", calories: 70, fat: 5, carbs: 0, protein: 6 },
    { name: "Soy", calories: 110, fat: 4.5, carbs: 9, protein: 8 },
    { name: "Whey", calories: 180, fat: 3, carbs: 7, protein: 30 },
    { name: "Creamer", calories: 30, fat: 1, carbs: 5, protein: 0 },
    { name: "Yogurt", calories: 90, fat: 0, carbs: 6, protein: 15 },
    { name: "BlueB", calories: 90, fat: 0, carbs: 22, protein: 1 },
    { name: "Banana", calories: 100, fat: 6, carbs: 30, protein: 0 },
    { name: "Avacado", calories: 322, fat: 29, carbs: 17, protein: 4 },
    { name: "Turkey", calories: 150, fat: 8, carbs: 0, protein: 22 },
    { name: "Crackers", calories: 110, fat: 2.5, carbs: 21, protein: 3 },
    { name: "CreamCheese", calories: 90, fat: 9, carbs: 2, protein: 2 },
    { name: "Red Turkey", calories: 170 , fat: 17, carbs: 0, protein: 19},
  ];

  const [calorieList, updateCalorieList] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const [fatList, updateFatList] = useState([]);
  const [totalFat, setTotalFat] = useState(0);
  const [fatPerc, setFatPerc] = useState(0);

  const [carbList, updateCarbList] = useState([]);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [carbPerc, setCarbPerc] = useState(0);

  const [proteinList, updateProteinList] = useState([]);
  const [totalProtein, setTotalProtein] = useState(0);
  const [proteinPerc, setProteinPerc] = useState(0);

  

  const handleInputChange = (event) => {
      event.preventDefault();
  }

  const handleSubmit = (event) => {
      event.preventDefault();    
      data.map(function(item, i){
          const calories = (event.target[item.name].value * item.calories);
          updateCalorieList(calorieList.push(calories));
          const fats = (event.target[item.name].value * item.fat);
          updateFatList(fatList.push(fats));
          const carb = (event.target[item.name].value * item.carbs);
          updateCarbList(carbList.push(carb));
          const protein = (event.target[item.name].value * item.protein);
          updateProteinList(proteinList.push(protein));
      });
      setTotalCalories(Math.round(calorieList.reduce((x, y) => x + y)));
      const totalFat = Math.round(fatList.reduce((x, y) => x + y));
      const totalCarbs = Math.round(carbList.reduce((x, y) => x + y));
      const totalProtein = Math.round(proteinList.reduce((x, y) => x + y));
      setTotalFat(totalFat);
      setTotalCarbs(totalCarbs);
      setTotalProtein(totalProtein);
      const macroPercent = 100/(totalFat + totalCarbs + totalProtein);
      setFatPerc(Math.round(macroPercent * totalFat));
      setCarbPerc(Math.round(macroPercent * totalCarbs));
      setProteinPerc(Math.round(macroPercent * totalProtein));
  }
    
  return (
    <div className="bg-gray-900 flex flex-row h-screen">
      <form className="flex flex-col w-1/3 items-center justify-between py-8 overflow-y-auto" onSubmit={(e) => handleSubmit(e)}>
          {data.map(function(item, i){
            return <ul className="flex w-full items-center mb-4 px-4 p-1 justify-between" list-style="none" key={i}>
            <li className="text-white italic font-mono">{item.name}</li>
            <input
                className="border-x border-t border-black rounded bg-gray-700 text-white px-2"
                name={item.name} 
                placeholder={0} 
                onChange={(e) => handleInputChange(e)}
            /> 
            </ul>;
          })}
          <button type="submit" className="text-white italic font-mono border border-black rounded-lg bg-gray-800 p-1">Calculate Macros</button>
      </form>
      <Adjust />
      <Result calories={totalCalories} fat={totalFat} carbs={totalCarbs} protein={totalProtein} fatPer={fatPerc} carbPer={carbPerc} proteinPer={proteinPerc}/>
    </div>
  );
}