import HeroImg from "/banner.png"
import PlayIcon from "/Play.png"
const Hero = () => {
    return (
        <div className="md:flex gap-5 justify-center">
            {/* left side */}
            <div className="my-auto text-wrap">
                <div className="">
                    <p >New: AI-Powered Tools Available</p>
                    <h1 className="text-5xl font-extrabold text-wrap">Supercharge Your <br /> Digital Workflow</h1>
                    <p>Access premium AI tools, design assets, templates, and productivity</p>
                    <p>software—all in one place. Start creating faster today.</p>
                    <p>Explore Products</p>
                   
                </div>

                <div className="flex gap-5">
                    <button>Explore Products</button>
                    <button className="flex flex-wrap "><img className="h-2/3 m-auto w-fit" src={PlayIcon} alt="Demo Play Button" />Watch Demo</button>
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