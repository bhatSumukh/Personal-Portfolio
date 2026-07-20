import { Link } from "react-router-dom";
import HeroImg from "../assets/sam2.png"
function Home(){
    return(
        <>
            <section id="home" className="flex items-center justify-between bg-(--background) h-screen">
               <div className="flex flex-col justify-center items-start mx-50 h-100 gap-10 w-125">
                <h1 className="text-(--primary) text-5xl font-body">Hello World..! <br /> I'm Sumukh Bhat</h1>
                <p className="text-(--text)  font-body">I believe code is a kind of magic. As developers, we create something meaningful from nothing more than lines of text turning ideas into experiences, one line at a time. That's why I don't just see myself as a programmer; I see myself as an artist, using code as my creative medium.</p>

                <div className="flex justify-center items-center gap-5 ">
                    <Link to="/contact"
                    className="px-12 py-6 bg-(--primary) border border-(--primary) rounded-md text-5x1 w-50 flex justify-center items-center hover:bg-(--background) hover:text-(--primary) transition-all" 
                    >Hire Me</Link>
                    <Link to="/projects"
                    className="px-12 py-6 border border-(--primary) rounded-md text-(--primary) w-50 flex justify-center items-center hover:bg-(--primary) hover:text-(--background) transition-all"
                    >See My Work</Link>
                </div>
               </div>
               <div className="flex justify-center items-center">
                <img src={HeroImg} alt="hero-img" className="h-90 w-100 rounded-full mx-50"/>
               </div>
            </section>
        </>
    )
}

export default Home;