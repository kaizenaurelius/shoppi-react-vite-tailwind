import { ShoppingCartIcon, CurrencyDollarIcon, CalendarDaysIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const { totalPrice, totalProducts, orderDate, } = props

  return (
    <div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg">
      <div className="flex items-center justify-between grow gap-2 px-4 w-full">
          <div className="flex gap-1 items-center justify-center">
            <ShoppingCartIcon className="h-6 w-6 text-black" />
            <p className="font-light text-sm">{`${totalProducts} ${totalProducts === 1 ? "producto" : "productos"}`}</p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <CurrencyDollarIcon className="h-6 w-6 text-black" />
            <p className="font-light text-sm">${totalPrice}</p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <CalendarDaysIcon className="h-6 w-6 text-black" />
            <p className="font-light text-sm">{orderDate}</p>
         </div>
         <div className="flex gap-1 items-center justify-center">
            <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'></ChevronRightIcon>
         </div>
      </div>
    </div>
  )
}

export default OrdersCard