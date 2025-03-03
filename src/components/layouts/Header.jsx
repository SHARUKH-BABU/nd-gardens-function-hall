import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import GradientText from "../../usages/GradientText";
import "../styles/Header.css";
import SplitText from "../../usages/SplitText";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  // Handle scroll effect
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`func-header ${visible ? "visible" : "hidden"}`}>
      <div className="func-header-container">
        <Link to="/" className="func-logo">
          <img src="/asserts/ND_Gardens_Logo.png" alt="ndgardens logo" />
        </Link>

        <nav className={`func-nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className={`func-nav-item ${location.pathname === "/" ? "active" : ""}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/gallery" className={`func-nav-item ${location.pathname === "/gallery" ? "active" : ""}`} onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/about" className={`func-nav-item ${location.pathname === "/about" ? "active" : ""}`} onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className={`func-nav-item ${location.pathname === "/contact" ? "active" : ""}`} onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

        <Link to="/booking" className="func-book-btn">
          <GradientText colors={["lightblue" ,"yellow", "white"]} animationSpeed={4} showBorder={false}>
            Book Now
          </GradientText>
        </Link>

        {/* Mobile Menu Button */}
        <div className={`func-mobile-menu-btn ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

      </div>

      {/* Mobile Fullscreen Navigation */}
      <div className={`func-mobile-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}></div>

      {isOpen && (
        <div className="func-mobile-nav open">
          <nav className="func-mobile-nav-links">
            <Link to="/" className="func-mobile-nav-item" onClick={() => setIsOpen(false)}>
              <SplitText
                text="Home"
                className="text-2xl font-semibold text-center"
                delay={70}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={1}
                rootMargin="-50px" />
            </Link>
            <Link to="/gallery" className="func-mobile-nav-item" onClick={() => setIsOpen(false)}>
              <SplitText
                text="Gallery"
                className="text-2xl font-semibold text-center"
                delay={90}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={1}
                rootMargin="-50px" />
            </Link>
            <Link to="/about" className="func-mobile-nav-item" onClick={() => setIsOpen(false)}>
              <SplitText
                text="About"
                className="text-2xl font-semibold text-center"
                delay={110}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={1}
                rootMargin="-50px" />
            </Link>
            <Link to="/contact" className="func-mobile-nav-item" onClick={() => setIsOpen(false)}>
              <SplitText
                text="Contact"
                className="text-2xl font-semibold text-center"
                delay={130}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={1}
                rootMargin="-50px" />
            </Link>
            <Link to="/booking" className="func-mobile-book-btn-gradient" onClick={() => setIsOpen(false)}>
              <GradientText colors={["red", "orange", "gray", "white", "green", "blue", "purple"]} animationSpeed={4} showBorder={false}>
                Book Now
              </GradientText>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
