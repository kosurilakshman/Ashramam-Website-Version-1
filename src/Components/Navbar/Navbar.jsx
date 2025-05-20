import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // 👈 Import routing tools
import "../navbar/Navbar.css";
// Import images here...
import image_1 from '../../assets/nav-img1.webp';
import image_2 from '../../assets/nav-img2.webp';
import image_3 from '../../assets/nav-img3.webp';
import image_4 from '../../assets/nav-img4.webp';
import image_5 from '../../assets/nav-img5.webp';
import image_6 from '../../assets/nav-img6.webp';
import image_7 from '../../assets/nav-img7.webp';
import image_8 from '../../assets/nav-img8.webp';
import image_9 from '../../assets/nav-img9.webp';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // 👈 Get current route

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Helper function to apply active class
    const isActive = (path) => location.pathname === path ? "active-link" : "";

    return (
        <nav className='navbar'>
            {/* Mobile Top Bar */}
            <div className="navbar-container">
                <div className="navbar-container-heading">
                    <img src={image_1} alt="image" className='nav-img' />
                    <img src={image_4} alt="image" className='nav-img' />
                    <img src={image_9} alt="image" className='nav-img' />
                </div>

                <div className="mobile-navbar-toggle" onClick={toggleMenu}>
                    ☰
                </div>
            </div>

            {/* Marquee */}
            <div className="mobile-navbar-box2">
                <marquee className="navbar-heading">
                    One World, One Religion, One Language, One Currency, One Ruling
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    One World, One Religion, One Language, One Currency, One Ruling 
                </marquee>
            </div>

            {/* Menu Content */}
            <div className={`navbar-content ${menuOpen ? 'active' : ''}`}>
                <div className="navbar-box1">
                    {[image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9].map((img, idx) => (
                        <img key={idx} src={img} alt={`navbar-image${idx + 1}`} loading="lazy" className='navbar-image' />
                    ))}
                </div>
                <div className="navbar-box2">
                    <marquee className="navbar-heading">
                        One World, One Religion, One Language, One Currency, One Ruling
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        One World, One Religion, One Language, One Currency, One Ruling 
                    </marquee>
                </div>

                <div className="navbar-box3">
                    <Link to="/" className={isActive("/")}>Home</Link>
                    <Link to="/temples" className={isActive("/temples")}>Temples</Link>
                    <Link to="/ourstory" className={isActive("/ourstory")}>Our Story</Link>
                    <Link to="/sevas" className={isActive("/sevas")}>Sevas</Link>
                    <Link to="/blogs" className={isActive("/blogs")}>Blogs</Link>
                    <Link to="/gallery" className={isActive("/gallery")}>Gallery</Link>
                    <Link to="/donations" className={isActive("/donations")}>Donations</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
