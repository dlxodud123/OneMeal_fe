import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Main_from from './main/js/main_form';
import Login_form from './login/js/login_form';

import Test from './test/test';

// Context 생성
export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [api] = useState('localhost:8080/api');

  return (
      <MyContext.Provider value={{ api }}>
          {children}
      </MyContext.Provider>
  );
};

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main_from></Main_from>}></Route>
          <Route path='/login' element={<Login_form></Login_form>}></Route>

          <Route path='/test' element={<Test></Test>}></Route>
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
