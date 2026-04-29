import HeroImg from "/banner.png"
import PlayIcon from "/Play.png"
const Hero = () => {
    return (
        <div className="md:flex justify-around">
            {/* left side */}
            <div className="my-auto text-wrap space-y-5">
                <div className="">
                    <h2 className="mb-2 badge badge-lg p-4 rounded-full bg-purple-200 text-blue-600"> <span className="rounded-full p-1 bg-linear-to-r/hsl from-blue-500 to-purple-500 "></span>New: AI-Powered Tools Available</h2>
                    <h1 className="mb-2 text-5xl font-extrabold text-wrap">Supercharge Your <br /> Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity</p>
                    <p>software—all in one place. Start creating faster today.</p>
                    <p>Explore Products</p>
                   
                </div>

                <div className="flex gap-5">
                    <button className="btn rounded-full bg-linear-to-r/hsl from-blue-500 to-purple-500 text-white">Explore Products</button>
                    <button className="btn text-purple-700 border-purple-600 rounded-full "><img className="m-auto " src={PlayIcon} alt="Demo Play Button" />Watch Demo</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <img src={HeroImg} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Hero;