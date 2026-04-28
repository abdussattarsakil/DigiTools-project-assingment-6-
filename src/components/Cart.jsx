const Cart = ({ carts }) => {
    return (
        <div>
            <div className="card container bg-base-100 shadow-sm m-auto">
                <div className="card-body">
                    <h2>Your Cart</h2>
                    <div className="space-y-3">
                        {
                            carts.map(cart => (
                                <div className="card bg-base-200 shadow-sm flex-row">
                                    <img className="w-1/12" src={cart.icon} alt="" />
                                    <div className="m-auto">
                                        <h1>{cart.name}</h1>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;