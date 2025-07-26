import React, { useEffect, useState } from 'react'
import { addExpense, editExpense, getExpense } from '../services/ExpenseService';
import { useNavigate, useParams } from 'react-router-dom';

const ExpenseComponent = () => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    const navigator = useNavigate();
    const {id} = useParams();

    function saveOrUpdateExpense(e){
        e.preventDefault();

        const expense ={name, amount}
        // const expense = {
        //     name: name, // assuming 'name' state exists
        //     amount: parseFloat(amount) // Convert to number before sending
        // };
        console.log(expense);

        if(id){
            editExpense(id, expense).then((response) => {
                console.log(response.data);
                navigator('/expenses');
            }).catch(error => {
                console.error(error);
            })
        } else {
            addExpense(expense).then((response) => {
                console.log(response.data);
                navigator('/expenses');
            }).catch(error => {
                console.error(error);
            })           
        }

    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Edit Expense</h2>
        } else {
            return <h2 className='text-center'>Add Expense</h2>
        }
    }

    useEffect( () => {

        if(id){
            getExpense(id).then((response) => {
                console.log(response.data);
                setName(response.data.name);
                setAmount(response.data.amount);
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id])

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Expense Name:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Expense Name'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Expense Amount:</label>
                            <input
                                type='number'
                                step='0.01'   // Add this for two decimal places, or 'any' for arbitrary decimals
                                className='form-control'
                                placeholder='Enter Expense Amount'
                                name='amount'
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            >
                            </input>
                        </div>

                        <button className='btn btn-success' onClick={(e) => saveOrUpdateExpense(e)}>Submit</button>
                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default ExpenseComponent