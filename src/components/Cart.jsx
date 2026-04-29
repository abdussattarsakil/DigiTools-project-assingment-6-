const Cart = ({ carts }) => {
    return (
        <div>
            <div className="card container bg-base-100 shadow-sm m-auto">
                <div className="card-body">
                    <h2>Your Cart</h2>
                    <div className="space-y-3 ">
                        {
                            carts.map(cart => (
                                <div className="card bg-base-200 shadow-sm p-3">
                                    <div className="flex justify-between items-center">

                                        {/* Left Side */}
                                        <div className="flex items-center gap-3 ">
                                            <img className="w-10" src={cart.icon} alt="" />

                                            <div>
                                                <h1 className="font-semibold">{cart.name}</h1>
                                                <p className="text-sm text-gray-500">${cart.price}</p>
                                            </div>
                                        </div>

                                        {/* Right Side */}
                                        <div>
                                            <p className="text-red-500 cursor-pointer border border-gray-400 rounded-full p-1">Remove</p>
                                        </div>
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