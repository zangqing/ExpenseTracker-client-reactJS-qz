import './App.css'
import ListExpenseComponent from './components/ListExpenseComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ExpenseComponent from './components/ExpenseComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'

function App() {

  function AuthenticatedRoute({children}){

    const isAuth = isUserLoggedIn();

    if(isAuth){
      return children;
    }

    return <Navigate to="/" />

  }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            // http://localhost:3000
              <Route path='/' element={<LoginComponent />}></Route>
            // http://localhost:3000/expenses
              <Route path='/expenses' element={
              <AuthenticatedRoute>
                <ListExpenseComponent />
              </AuthenticatedRoute>
              }></Route>
            // http://localhost:3000/add-expense
              <Route path='/add-expense' element={
              <AuthenticatedRoute>
                <ExpenseComponent />                
              </AuthenticatedRoute>
              }></Route>
            // http://localhost:3000/edit-expense/1
              <Route path='/edit-expense/:id' element={
              <AuthenticatedRoute>
                <ExpenseComponent />                
              </AuthenticatedRoute>
              }></Route>
            // http://localhost:3000/register
              <Route path='/register' element={<RegisterComponent />}></Route>
            // http://localhost:3000/login
              <Route path='/login' element={<LoginComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
