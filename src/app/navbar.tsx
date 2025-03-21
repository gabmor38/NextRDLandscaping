'use client'
 
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CldImage } from "next-cloudinary";



const categories = [
    {
      name: 'Home',
      href: '/',
      id: '0',
      className:"nav-item"
    },
    {
      name: 'About us',
      href: '/about',
      id: '1',
      className:"nav-item"
    },
    {
      name: 'Services',
      href: '/services',
      id: '2',
      className:"nav-item"
    },
    {
      name: 'Contact',
      href: '/contact',
      id: '3',
      className:"nav-item nav-pills text-black buttonColor buttonBorderRadius no-underline"
    },
  ];;

export default function Navbar() {

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);
      
  return (
    <nav className={`navbar navbar-expand-lg ${ pathname !== '/'? "border-bottomgreen" : ""}`} role="navigation">
          <div className="container-fluid navbarTabs d-flex">
            <Link className="navbar-brand" href="/">  
              <CldImage
                src="yjxxvritcttzkfkjhzqk" 
                width="150"
                height="150"
                crop={{
                  type: "fit",
                  source: true,
                }}
                alt={"logo"}
                
                style={{padding:'10px'}}
              />
            </Link>
             {/* Toggle Button */}
              <button
                className="navbar-toggler lg:hidden"
                type="button"
                aria-expanded={isOpen ? "true" : "false"}
                aria-label="Toggle navigation"
                onClick={toggle}
                style={{ border: 'none', background: 'transparent' }}
              >
                <span>{!isOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}</span>
              </button>

              <div className={`w-full ${isOpen ? 'flex' : 'hidden'} lg:flex `}>
              <ul className="flex flex-col items-center justify-center text-center gap-y-4 gap-x-0 w-full lg:flex-row lg:items-end lg:justify-end lg:gap-x-8 lg:gap-y-0">
                  {categories.map((category) => (
                    <li key={category.id} className={category.className}>
                      <Link
                        href={category.href}
                        className={`nav-link ${category.id === '3' ? 'navbarButton' : ''}`}
                        style={{ textDecoration: 'none', padding: '8px' }}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </nav>
  );
}


