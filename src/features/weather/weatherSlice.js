import {createSlice} from "@reduxjs/toolkit";


const weatherSlice = createSlice({
    name: 'weather', // имя "слайса" -> попадёт в action.type
    initialState: {}, // начальное состояние = пустой объект
    reducers: {
        setWeather: (state, action) => action.payload // заменяем всё состояние новым объектом
    }
})


export const {setWeather} = weatherSlice.actions;
export default weatherSlice.reducer;
