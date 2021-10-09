import React from 'react';
import { ADD_TO_DB, SEARCH_DB } from '../Actions/Actions';

const initialState = {
    allDb: [],
    searcheData: [],
    filterByYear: [],
    filterByMonth: [],
    filterByWeek: [],
    displayItems:[]
}


const Reducers = (state = initialState, action) => {


    switch(action.type){
        
        case ADD_TO_DB:
            const info = action.allData;
            return {...state, allDb: info, displayItems:info}

        case SEARCH_DB:
            const searchName = action.name;
            // console.log(state.allDb, searchName)
            // const correctObj = state.allDb.map(info => info.rocket.rocket_name === searchName)

            // const correctObj = state.allDb.filter( function(info) {
            //     console.log(info.rocket.rocket_name ,searchName)
            //     const data = info.rocket.rocket_name
            //     return data === searchName
            // })
            const correctObj = state.allDb.filter(info => info.rocket.rocket_name === searchName)

            // .filter(info => info.rocket.rocket_name === searchName)
            // console.log(info.rocket.rocket_name)
            // console.log(correctObj)
            return {...state, searcheData: correctObj, displayItems: correctObj}
            
            default:
                return state;
            }
    
            
};

export default Reducers;