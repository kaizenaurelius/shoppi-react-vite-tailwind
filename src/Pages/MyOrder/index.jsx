import Layout from "../../Components/Layout"
import OrderCard from '../../Components/OrderCard'
import { ShoppingCartContext } from '../../Context'
import { useContext } from "react" 


function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
            <div className='flex flex-col w-80'>
    {
      context.order?.slice(-1)[0].products.map(product => (
          <OrderCard
              id={product.id} 
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
          />
      ))
    }
    </div>
    </Layout>
  )
}

  export default MyOrder