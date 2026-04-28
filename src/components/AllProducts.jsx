
const AllProducts = () => {
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
                <button className="btn btn-primary">Products</button>
                <button className="btn">Cart(0)</button>
            </div>

        </div>
    );
};

export default AllProducts;