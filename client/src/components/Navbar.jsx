import React, { useEffect, useState } from 'react';
import "../App.css";
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);

  const navbarItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6
       }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
  <section className="w-2/5 h-screen flex flex-col justify-center items-start px-6 text-white sticky top-0">
    <div className="flex flex-col self-start mt-25  ml-45">

      <h1 className="text-5xl font-bold mb-4">Samuel Knowles</h1>

      <h2 className=" text-2xl text-gray-400 mb-8">Software Engineer</h2>

        <p className="text-gray-400 mb-8">Software engineering student passionate about building fun and creative projects.</p>

      <nav className="mt-4">
        <ul className="flex flex-col space-y-3">
          {navbarItems.map((item) => {
            const isHovered = hoveredItem === item.href;
            const isActive = activeSection === item.href && hoveredItem === null;

            const textColor = isActive || isHovered ? "text-white" : "text-gray-400";
            const lineWidth = isActive || isHovered ? "w-20 mr-3 bg-white" : "w-10 group-hover:w-20 group-hover:mr-3";
            const textShift = isActive || isHovered ? "translate-x-1" : "group-hover:translate-x-1";

            return (
              <li key={item.label} className='w-50'>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector(item.href);
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group flex items-center transition-all duration-500 ${textColor}`}
                >
                  {/* Line */}
                  <span
                    className={`h-0.5 bg-gray-600 transition-all duration-500 ${lineWidth}`}
                  ></span>

                  {/* Text */}
                  <span className={`ml-2 transition-all duration-500 ${textShift}`}>
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* footer */}
        <footer className="bg-slate-900 text-white py-30">
      <div className="flex justify-left space-x-4">
        <SocialIcon
          network="github"
          url="https://github.com/Samuel12372"
          fgColor="#ffffff"
          bgColor="transparent"
          className="hover:scale-130 transition-transform duration-300"
        />
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/sam-knowles-2788352ba/"
          fgColor="#ffffff"
          bgColor="transparent"
          className="hover:scale-130 transition-transform duration-300"
        />
      </div>
    </footer>

      
    </div>
  </section>
);

};

export default Navbar;
