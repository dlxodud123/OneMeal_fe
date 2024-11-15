import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Main_from from './main/js/main_form';
import Login_form from './login/js/login_form';
import Google_callback from './callback/google/google_callback';
import Kakao_callback from './callback/kakao/kakao_callback';
import Naver_callback from './callback/naver/naver_callback';
import Signup_form from './signup/js/signup_form';

import Test from './test/test';

// Context 생성
export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [api] = useState('http://43.202.68.231:8081/api');

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
          <Route path='/google/callback' element={<Google_callback></Google_callback>}></Route>
          <Route path='/kakao/callback' element={<Kakao_callback></Kakao_callback>}></Route>
          <Route path='/naver/callback' element={<Naver_callback></Naver_callback>}></Route>
          <Route path='/signup' element={<Signup_form></Signup_form>}></Route>

          <Route path='/test' element={<Test></Test>}></Route>
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
