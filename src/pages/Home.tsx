import Hero from "../components/sections/Hero";
import Intro from "../components/sections/Intro.tsx";
import About from "../components/sections/About.tsx";
import Technologies from "../components/sections/Technologies.tsx";
import Projects from "../components/sections/Projects.tsx";
import Research from "../components/sections/Research.tsx";

const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <About />
            <Technologies />
            <Projects />
            <Research />
        </>
    );
};

export default Home;
