import React from 'react';
import { Info } from './Info';

export const Result = ({calories, fat, carbs, protein, fatPer, carbPer, proteinPer}) => {
    return (
        <div className="flex flex-col w-1/3 py-8 grid justify-items-center content-between">
            <Info text={"Total Calories: " + calories} />
            <Info text={"Total Fat: " + fat} />
            <Info text={"Total Carbs: " + carbs} />
            <Info text={"Total Protein: " + protein} />
            <Info text={"Fat Percentage: " + fatPer} />
            <Info text={"Carb Percentage: " + carbPer} />
            <Info text={"Protein Percentage: " + proteinPer} />
        </div>
    )
}