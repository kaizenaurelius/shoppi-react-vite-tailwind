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
  const isUserSignedOut = signOut || parsedSignOut

  const renderConditionedNavElement = () => {
    if(isUserSignedOut) {
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
    }else{
      return(
        <>
        <li className='text-black/60'>
          teff@platzi.com
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
    }
  }

  const handleSignOut = () => {
    localStorage.setItem('sign-out', JSON.stringify(true) ) //cambio a true en el LocalStorage y en el contexto.
    context.setSignOut(true)
  }

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
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