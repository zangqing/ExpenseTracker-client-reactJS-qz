import './App.css'
import ListExpenseComponent from './components/ListExpenseComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExpenseComponent from './components/ExpenseComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            // http://localhost:3000
              <Route path='/' element={<ListExpenseComponent />}></Route>
            // http://localhost:3000/expenses
              <Route path='/expenses' element={<ListExpenseComponent />}></Route>
            // http://localhost:3000/add-expense
              <Route path='/add-expense' element={<ExpenseComponent />}></Route>
            // http://localhost:3000/edit-expense/1
              <Route path='/edit-expense/:id' element={<ExpenseComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
