import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-700">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="h-full w-full bg-slate-950">
                    <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
                </div>
            </div>
            <div className="container mx-auto px-8">
                <NavBar />
                <Hero />
                <About />
                <Technologies/>
                <Experience/>
                <Projects/>
                <Contact/>
            </div>
        </div>
  )
}


