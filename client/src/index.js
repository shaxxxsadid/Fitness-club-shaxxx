import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import UserStore from './sotre/UserStore';
import ProductStore from './sotre/ProductStore';
import GroupWorkoutStore from './sotre/GroupWorkoutStore';
import ServiceStore from './sotre/ServicesStore';

export const Context = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Context.Provider value={{
        user: new UserStore(),
        product: new ProductStore(),
        groupWorkout: new GroupWorkoutStore(),
        service: new ServiceStore()
      }}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  </HashRouter>
);
