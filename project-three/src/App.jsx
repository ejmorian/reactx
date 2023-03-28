import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './css/App.css'

function App() {

  const schema = yup.object().shape({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().email().required('email is required'),
    age: yup.number().positive().integer().min(16).required('age is required'),
    password: yup.string().min(4).max(20).required('password is required'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password do not match").required()
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='apply'>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='full name...' {...register("fullName")} />
        <input type='text' placeholder='Email...'{...register("email")} />
        <input type='number' placeholder='age...' {...register("age")} />
        <input type='password' placeholder='password...'{...register("password")} />
        <input type='password' placeholder='confirm password...'{...register("confirmPassword")} />
        <button>Done</button>
        <span>{errors.fullName?.message}</span>
        <span>{errors.age?.message}</span>
        <span>{errors.email?.message}</span>
        <span>{errors.password?.message}</span>
        <span>{errors.confirmPassword?.message}</span>

      </form>



    </div>
  )
}

export default App
