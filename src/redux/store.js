import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, userReducer } from "./slice";


// Creación del store utilizando Redux toolkit
const store = configureStore({
  reducer: {
    counter: counterReducer, //contador
    user: userReducer // usuario
  }
});

export default store;