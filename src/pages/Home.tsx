import Hero from "../components/sections/Hero";
import Intro from "../components/sections/Intro.tsx";
import About from "../components/sections/About.tsx";
import Technologies from "../components/sections/Technologies.tsx";
import Projects from "../components/sections/Projects.tsx";
import Research from "../components/sections/Research.tsx";
import Leadership from "../components/sections/Leadership.tsx";
import Contact from "../components/sections/Contact.tsx";

const Home = () => {
    return (
        <div className="dark min-h-screen bg-background-dark text-white">
            {/* Full page background with gradient circles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Subtle grid overlay for the entire page */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(#4b2bee 1px, transparent 1px), linear-gradient(90deg, #4b2bee 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
                aria-hidden
            />
            <Hero />
            <Intro />
            <About />
            <Technologies />
            <Projects />
            <Research />
            <Leadership />
            <Contact />
        </div>
    );
};

export default Home;
