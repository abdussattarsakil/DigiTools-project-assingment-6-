import { use } from "react";
import { toast } from "react-toastify";

const dataPromise = fetch("/data.json").then(res => res.json());
//console.log(dataPromise)
const ProductsCart = ({ carts, setCarts }) => {
    const data = use(dataPromise)
    const buyNow = (cartData) => {
        const isExist = carts.find(cart => cart.name === cartData.name)
        if (isExist) {
            toast.info(`${cartData.name} is already added`)
            return;
        }
        else{
            setCarts([...carts, cartData])
            toast.success(`${cartData.name} is already added`)
        }
        
    }

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-fit m-auto ">
            {
                data.map(cartData => (
                    <div>
                        <div className="card w-80 bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className="flex justify-between">

                                    <img className="w-1/12" src={cartData.icon} alt="" />

                                    <span className={`badge-xs text-white ${cartData.tag === 'New' && 'badge badge-success'} ${cartData.tag === 'Popular' && 'badge badge-info'} ${cartData.tag === 'Best Seller' && 'badge badge-warning'}`}>{cartData.tag}</span>

                                </div>

                                <div className="">
                                    <h2 className="text-xl font-bold">{cartData.name}</h2>
                                    <p>{cartData.description}</p>
                                    <span className="text-xl">${cartData.price}/{cartData.period}</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    {
                                        cartData.features.map(feature => (
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))
                                    }


                                </ul>
                                <div className="mt-6">
                                    <button onClick={() => buyNow(cartData)}
                                        className={`rounded-full ${carts.find(cart => cart.name === cartData.name) ? 'btn text-white btn-block bg-linear-to-r/hsl from-purple-400 to-purple-500' : 'btn text-white btn-block bg-linear-to-r/hsl from-purple-500 to-blue-500'}`}>
                                        {carts.find(cart => cart.name === cartData.name) ? 'Added to cart' : 'Buy Now'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductsCart;