import emptyCard from "/package.png"
import manIcon from "/user.png"
import rocketIcon from "/rocket.png"
const Steps = () => {
    return (
        <div className="bg-base-200 p-20 space-y-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>
            {/* card */}
            <div className="">
                <div className="md:flex md:gap-5 md:justify-center text-center">
                    <div className="shadow-xl rounded-xl w-80 p-5 space-y-3">
                        <div className="relative "><h2 className="absolute top-0 right-0 p-1 rounded-full bg-purple-400">01</h2></div>
                        <img className="m-auto mb-2 mt-15 p-3 bg-purple-300 rounded-full"
                            src={manIcon} alt="" />
                        <h1>Create Account</h1>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    <div className="shadow-xl rounded-xl w-80 p-5 space-y-3">
                        <div className="relative "><h2 className="absolute top-0 right-0 p-1 rounded-full bg-purple-400">02</h2></div>
                        <img className="m-auto mb-2 mt-15 p-3 bg-purple-300 rounded-full" src={emptyCard} alt="" />
                        <h1>Choose Products</h1>
                        <p>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    <div className="shadow-xl rounded-xl w-80 p-5 space-y-3">
                        <div className="relative "><h2 className="absolute top-0 right-0 p-1 rounded-full bg-purple-400">03</h2></div>
                        <img className="m-auto mb-2 mt-15 p-3 bg-purple-300 rounded-full" src={rocketIcon} alt="" />
                        <h1>Start Creating</h1>
                        <p>Download and start using your premium tools immediately.</p>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Steps;