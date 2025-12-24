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
        <>
            <Hero />
            <Intro />
            <About />
            <Technologies />
            <Projects />
            <Research />
            <Leadership />
            <Contact />
        </>
    );
};

export default Home;
