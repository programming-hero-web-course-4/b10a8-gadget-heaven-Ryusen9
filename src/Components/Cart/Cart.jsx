import PropTypes from 'prop-types'
const Cart = ({carts}) => {
  console.log(carts)
  return (
    <div>
      <p>Avocado</p>
    </div>
  )
}
Cart.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.object)
}
export default Cart