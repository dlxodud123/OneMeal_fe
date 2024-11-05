import './App.css';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
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

          <Route path='/' element={<Test></Test>}></Route>
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
