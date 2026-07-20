function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full lg:h-20 h-10 bg-(--background) border-b-2 border-(--primary) flex justify-between items-center lg:px-2 lg:z-50">
        <div>
          <h1 className="text-(--primary) md:text-m  font-body">
            &gt;_Sumukh Bhat
          </h1>
        </div>
        <div>
          <ul className="justify-center items-center gap-6 hidden lg:flex">
            <li className="relative hover:text-(--text) cursor-pointer text-(--primary) text-m font-medium tracking-wide after:content-'' after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-(--royal-gold) after:transition-all after:duration-300 hover:after:w-full font-body">
              <a href="/">Home</a>
            </li>

            <li className="relative hover:text-(--text) cursor-pointer text-(--primary) text-m font-medium tracking-wide after:content-'' after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-(--royal-gold) after:transition-all after:duration-300 hover:after:w-full font-body">
              <a href="#about">About</a>
            </li>

            <li className="relative hover:text-(--text) cursor-pointer text-(--primary) text-m font-medium tracking-wide after:content-'' after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-(--royal-gold) after:transition-all after:duration-300 hover:after:w-full font-body">
              <a href="#projects">Projects</a>
            </li>

            {/* <li className="relative hover:text-(--text) cursor-pointer text-(--primary) text-m font-medium tracking-wide after:content-'' after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-(--royal-gold) after:transition-all after:duration-300 hover:after:w-full font-body"
                        ><Link to="/playground">Playgorund</Link></li> */}

            <li className="relative hover:text-(--text) cursor-pointer text-(--primary) text-m font-medium tracking-wide after:content-'' after:absolute after:left-0 after:bottom-1 after:h-0.5 after:w-0 after:bg-(--royal-gold) after:transition-all after:duration-300 hover:after:w-full font-body">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
