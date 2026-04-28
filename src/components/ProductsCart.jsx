import { use } from "react";

const dataPromise = fetch("../../public/data.json").then(res => res.json());
//console.log(dataPromise)
const ProductsCart = () => {
    const data = use(dataPromise)
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
                                    <button className="btn text-white btn-block bg-linear-to-r/hsl from-blue-500 to-purple-500">Buy Now</button>
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