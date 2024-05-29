import Layout from "../../Components/Layout"
import { Link, useNavigate} from 'react-router-dom'
import {useContext, useState, useRef} from 'react'
import { ShoppingCartContext } from '../../Context'



function SignIn() {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const form =  useRef(null)
    const navigate =  useNavigate();

    //Obteniendo Account del LocalStorage
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    //Has an account 
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignIn = () => {
      const stringifiedSignOut = JSON.stringify(false)
      localStorage.setItem('sign-out', stringifiedSignOut)
      context.setSignOut(false)

      //return <Navigate replace to={'/'} />
       navigate('/', { replace: true });
    }

    const createAnAccount = () => {
      const formData = new FormData(form.current)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')

      }
      localStorage.setItem('account', JSON.stringify(data))
      context.setAccount(data)
      console.log(data);

      handleSignIn()
    }



    // Elemento del Log In a renderizar
    const renderLogIn = () => {
      return (
        <div className='flex flex-col w-80'>

        <p>
          <span className='font-light text-sm'>Email:</span>
          <span>Tob@gmail.com</span>
        </p>

        <p>
        <span className='font-light text-sm'>Password:</span>
        <span>****</span>
        </p>

        <Link
          to='/'>
          <button
            className='bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2'
            disabled={!hasUserAnAccount}
            onClick={() => handleSignIn()}>
            Log in
          </button>
        </Link>

        <div className='text-center'>
          <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
        </div>

        <button className='border border-black disabled:text-black/40 disabled:border-black/40
        rounded-lg mt-6 py-3'
        onClick={() => setView('create-user-info')}>
          Sign up
        </button>

      </div>
      )

    }

    //Elemento a renderizar si hay que crear user ingo
    const renderCreateUserInfo = () => {
      return ( 
        <form ref={form} className='flex flex-col gap-4 w-80'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name' className='font-light text-sm'>Your name:</label>
            <input
              type='text'
              id='name'
              name='name'
              defaultValue={parsedAccount?.name}
              placeholder='Your Name'
              className='rounded-lg border border-black placeholder:font-light
              placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            >

            </input>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='font-light text-sm'>Your e-mail</label>
            <input
              type='text'
              id='email'
              name='email'
              defaultValue={parsedAccount?.email}
              placeholder='Your Email'
              className='rounded-lg border border-black placeholder:font-light
              placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            >

            </input>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='password' className='font-light text-sm'> Your Password: </label>
            <input
              type='text'
              id='password'
              name='password'
              defaultValue={parsedAccount?.password}
              placeholder='*****'
              className='rounded-lg border border-black placeholder:font-light
              placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
            >
            </input>
          </div>

          <Link>
              <button
                className='bg-black text-white w-full rounded-lg py-3'
                onClick={() => createAnAccount()}
                >
                Create
              </button>
            </Link>
        </form>
      )
    }

    //Rendering dependiendo de estado: Log in - Create User Info
     const renderview = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()




    return (
      <Layout>
        <h1 className='font-medium text-xl text-center mb-6 w-80'>Welcome</h1>
        {renderview()}
      </Layout>
    )
  }
  
  export default SignIn