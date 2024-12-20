import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Main_from from './main/js/main_form';
import Login_form from './login/js/login_form';
import Id_find from './login/js/id_find';
import Pwd_find from './login/js/pwd_find';
import Google_callback from './callback/google/google_callback';
import Kakao_callback from './callback/kakao/kakao_callback';
import Naver_callback from './callback/naver/naver_callback';
import Signup_form from './signup/js/signup_form';
import Recipe_form from './recipe/js/recipe_form';
import Product_form from './product/js/product_form';
import Ingredient_form from './ingredient/js/ingredient_form';
import Ingredient_result_form from './ingredient_result/js/ingredient_result_form';

import Test from './test/test';

// Context 생성
export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [api] = useState('http://13.125.88.2:8081/api');

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
          <Route path='/idfind' element={<Id_find></Id_find>}></Route>
          <Route path='/pwdfind' element={<Pwd_find></Pwd_find>}></Route>
          <Route path='/google/callback' element={<Google_callback></Google_callback>}></Route>
          <Route path='/kakao/callback' element={<Kakao_callback></Kakao_callback>}></Route>
          <Route path='/naver/callback' element={<Naver_callback></Naver_callback>}></Route>
          <Route path='/signup' element={<Signup_form></Signup_form>}></Route>
          <Route path='/recipe/:category' element={<Recipe_form></Recipe_form>}></Route>
          <Route path='/product/:id' element={<Product_form></Product_form>}></Route>
          <Route path='/ingredient' element={<Ingredient_form></Ingredient_form>}></Route>
          <Route path='/ingredient/result' element={<Ingredient_result_form></Ingredient_result_form>}></Route>

          <Route path='/test' element={<Test></Test>}></Route>
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
