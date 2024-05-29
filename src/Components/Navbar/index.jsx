import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  //Sign-Out Verificación

  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignedOut = context.signOut || parsedSignOut

  //Obteniendo Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  //Has an account 
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignOut = () => {
    localStorage.setItem('sign-out', JSON.stringify(true) ) //cambio a true en el LocalStorage y en el contexto.
    context.setSignOut(true)
  }

  const renderConditionedNavElement = () => {
    if(hasUserAnAccount && !isUserSignedOut) {
      return(
        <>
        <li className='text-black/60'>
          {parsedAccount.email}
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li>
      <NavLink
        to='/sign-in'
        className={({ isActive }) =>
          isActive ? activeStyle : undefined
        }
        onClick={() => handleSignOut()}>
        Sign Out
      </NavLink>
    </li>
  
      
     </>
      )
    }else{
      return (
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => handleSignOut()}>
            Sign In
          </NavLink>
        </li>
        )
    }
  }


  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to={`${isUserSignedOut ? '/sign-in' :'/'}`}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => context.setSearchByCategory('electronics')}
            to='/electronics'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
         {renderConditionedNavElement()}
         <li className='flex  items-center'>
          <ShoppingBagIcon className='h-6 w-6 text-black-' /> 
          <div> { context.cartProducts.length} </div>
        </li>
      </ul>


 
    </nav>
  )
}

export default Navbar