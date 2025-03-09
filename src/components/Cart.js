import '../styles/Cart.css';
function Cart () {
    const monsteraPrice = 8
        const ivyPrice = 10
        const flowerPrice = 15
        const title = 'Panier'
    return (
        <div className="lmjCart">
            <h2 className='lmjCartTitle'>{title}</h2>
            <ul>
                <li className='lmjCartItems'>monstera : {monsteraPrice}$</li>
                <li className='lmjCartItems'>Lierre : {ivyPrice}$</li>
                <li className='lmjCartItems'>Fleurs : {flowerPrice}$</li>
            </ul>
            Total : {monsteraPrice + ivyPrice + flowerPrice}$
        </div>
    )
}

export default Cart