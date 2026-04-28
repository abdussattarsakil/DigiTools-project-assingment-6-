const State = () => {
    return (
        <div className="flex justify-around text-center mt-20 bg-linear-to-r/hsl from-blue-500 to-purple-500 text-white p-10">
            <div>
                <h1 className="text-4xl font-extrabold">50K+</h1>
                <p>Active Users</p>
            </div>

            <div className="w-0.5 bg-gray-500"></div>

            <div>
                <h1 className="text-4xl font-extrabold">200+</h1>
                <p>Premium Tools</p>
            </div>

            <div className="w-0.5 bg-gray-500"></div>
            
            <div>
                <h1 className="text-4xl font-extrabold">4.9</h1>
                <p>Rating</p>
            </div>

        </div>
    );
};

export default State;