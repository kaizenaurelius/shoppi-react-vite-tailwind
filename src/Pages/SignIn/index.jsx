import Layout from "../../Components/Layout"
import { Link } from 'react-router-dom'
import {useContext, useState} from 'react'
import { ShoppingCartContext } from '../../Context'



function SignIn() {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')

    //Obteniendo Account del LocalStorage
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    //Has an account 
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

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
            disabled={!hasUserAnAccount}>
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