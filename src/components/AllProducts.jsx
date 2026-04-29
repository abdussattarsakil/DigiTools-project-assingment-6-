
const AllProducts = ({ carts, toggleBtn, setToggleBtn }) => {

    const productsBtn = () => {
        setToggleBtn(false)
    }

    const cartsBtn = () => {
        setToggleBtn(true)
    }
    console.log(toggleBtn);
    return (
        <div>

            <div className="text-center">
                {/* static */}
                <h1>Premium Digital Tools</h1>
                <p>
                    Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
                </p>
            </div>
            {/* dynamic */}
            <div className="flex gap-7 justify-center">
                <button onClick={productsBtn}
                    className={`${toggleBtn?'btn rounded-full':'btn bg-linear-to-r/hsl from-blue-500 to-purple-500 text-white rounded-full'}`}>Products
                </button>
                
                <button onClick={cartsBtn}
                    className={`${toggleBtn&&'btn bg-linear-to-r/hsl from-blue-500 to-purple-500 text-white rounded-full'}`}>Cart({carts.length})
                </button>
            </div>

        </div>
    );
};

export default AllProducts;