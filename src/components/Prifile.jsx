import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateStatus, updateAge, updateName,fetchUserName,fetchUseremail, fetchCity } from '../reducers/useReducer'

const Prifile = () => {
  const { name, age, city, status,email } = useSelector((state) => {
    console.log(state);
    return state
  })
  //initialze the dispatch
  const dispatch = useDispatch()


  const changeAge = (age) => {
    dispatch(updateAge(age))
  }

  const changeName = (name) => {

    dispatch(fetchUserName(name))
  }
  const changeCity = (city) => {

    dispatch(fetchCity(city))
  }
  const changestatus = (status) => {
    dispatch(updateStatus(status))
  }
  // const changeemail = (email) => {
  //   dispatch(fetchUseremail(email))
  // }
  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>My age is {age}</h1>
      <h1>My city is {city}</h1>
      <h1>my fev language is : {status}</h1>
      <h1>my fev language is : {email}</h1>

      <button onClick={() => changeAge(40)}>AgeUpdate</button>
      <button onClick={() => changeName()}>NameUpdate</button>
      <button onClick={() => changeCity()}>CityUpdate</button>
      <button onClick={() => changestatus('Laravel')}>UpdateStatus</button>
      {/* <button onClick={() => changeemail('')}>Update Email</button> */}
    </div>
  )
}

export default Prifile
