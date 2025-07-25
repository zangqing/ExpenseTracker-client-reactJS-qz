import React, { useEffect, useState } from 'react'
import { deleteExpense, getAllExpenses } from '../services/ExpenseService'
import { useNavigate } from 'react-router-dom'

const ListExpenseComponent = () => {

  // const dummyData = [
  //   {
  //     "id": 1,
  //     "name": "Buy iphone 15",
  //     "amount": 870.99
  //   },
  //    {
  //     "id": 2,
  //     "name": "Buy iphone 16",
  //     "amount": 970.99
  //   }
  // ]

    const [expenses, setExpenses] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
      listExpenses();
    }, [])

    function listExpenses(){
      getAllExpenses().then((response) => {
        setExpenses(response.data);
      }).catch(error => {
        console.error(error);
      })
    }

    function addNewExpense(){
      navigator('/add-expense')
    }

    function updateExpense(id){
      console.log(id);
      navigator(`/edit-expense/${id}`)
    }

    function removeExpense(id){
      deleteExpense(id).then((response) => {
        listExpenses();
      }).catch(error => {
        console.error(error);
      })

    }

  return (
    <div className='container'>
      <h2 className='text-center'>List of Expenses</h2>
      <button className='btn btn-primary mb-2' onClick={addNewExpense}>Add Expense</button>
      <div>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Expense Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map(expense => 
                <tr key={expense.id}>
                    <td>{expense.name}</td>
                    <td>{expense.amount}</td>
                    <td>
                      <button className='btn btn-info' onClick={() => updateExpense(expense.id)}>Edit</button>
                      <button className='btn btn-danger' onClick={() => removeExpense(expense.id)} style={{marginLeft:"10px"}}>Delete</button>
                    </td>
                </tr>
              )
            }
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default ListExpenseComponent