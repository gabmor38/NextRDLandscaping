/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
 
import { motion } from "framer-motion";
import Link from "next/link";
import Reviews from "./reviews/page";
import { CldImage } from "next-cloudinary";
import Cursor from "./cursor";
import { useState } from "react";
//import Scene from "./scene";

 

export interface FormDataType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}




const services = [
  {
    title: "Yard Work",
    description:
    "Flexible, on-demand services for various garden and yard maintenance needs.",
  },
  {
    title: "Mulch, Soil & Compost",
    description:
    "Professional installation of mulch, triple mix soil, and compost to enhance garden beds.",
  },
  {
    title: "Garden Design Projects",
    description:
    "Full-service garden design and installation for creating beautiful, functional outdoor spaces.",
  },
  {
    title: "Retaining Walls & Patios",
    description:
    "Professional installation of patios and retaining walls to add structure and style to your landscape.",
  },
  {
    id: "5",
    title: "Sod Installation",
    description:
    "Proven sod installation services to create new lawns or replace existing ones.",
  },
  {
    title: "Spring & Fall Clean-Ups",
    description:
    "Seasonal garden clean-up services to prepare your yard for spring growth or get it ready for winter.",
  },
  {
    title: "Mulch, River Rock, and Soil",
    description:
    "Supply and installation of high-quality mulch, river rock, and soil for landscaping projects.",
  },
  {
    title: "Overseeding & Top Dressing",
    description:
    "Lawn repair services, including overseeding and top dressing, to maintain a healthy, vibrant lawn.",
  },
];


export default function Home() {

  const [cursorVariant, setCursorVariant] = useState("default");
  const [showOtherSide, setShowOtherSide] =useState<{ [key: number]: boolean }>({});

  const handleCardClick = (cardIndex:any):void => {

    setShowOtherSide((prev) => {
      return prev[cardIndex] ? {} : { [cardIndex]: true }; //if card is open reset the state to {} to close it otherwise open it 
    });
     
   
  }
 

  return (
    
    <>
      <div>
        <main>
          <div className="mb-5">
            <>
             <Cursor  cursorVariant={cursorVariant} />
              <div className="background-div">
                <h2
                  className="h2 text-center p-3 text-black"
                  style={{ background: "#719340" }}
                >
                  Now Booking: Spring, Summer, & Fall 2025!
                </h2>
              </div>

              <section className="px-6 py-12 container mt-5 mb-5">
                <h2 
                  id="ourServices" 
                  className={`mb-5 5 text-center text-drop-shadow titleFont`}
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")} 
                >
                  Our Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black text-center">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${!showOtherSide[index] ? "bg-white" : "buttonColor"} shadow-lg rounded-2xl p-6 transition-shadow duration-300 hover:shadow-2xl`}
                      style={ !showOtherSide[index] ? { borderBottom: "5px solid #98c657" } : {borderBottom: 'none'}}
                      onClick={() => handleCardClick(index)}
                    >
                     { !showOtherSide[index] && <h3 className="text-xl font-semibold mb-2">
                       {service.title} 
                      </h3> }
                      { showOtherSide[index] && <p className="text-black font-semibold">{service.description}</p>}
                    </motion.div>
                  ))}
                </div>
                <div className="container mt-5 mb-5 text-center">
                  <Link href="/contact">
                    <motion.button
                      id={"3"}
                      whileHover={{
                        scale: 1.3,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                      className="py-2 px-4 rounded-lg buttonColor"
                      style={{ color: "black", borderRadius:45 }}
                    >
                      Get a quote
                    </motion.button>
                  </Link>
                </div>
              </section>

              <section className="container mt-5 mb-5">
                <h2 
                  className="titleFont mb-5 text-center "
                  onMouseEnter={() => setCursorVariant("text")}
                  onMouseLeave={() => setCursorVariant("default")}
                  >
                  View our Projects
                </h2>
                <div
                  className="row row-cols-1 row-cols-md-3 g-4 clearfix mb-5"
                  style={{
                    borderTop: "1px solid #bff96d",
                    paddingBottom: "50px",
                  }}
                >
                  <div className="col">
                    <div>
                      <CldImage
                        src="qhhg1qcxfp5b3p8veknu"
                        width="500"
                        height="500"
                        crop={{
                          type: "auto",
                          source: true,
                        }}
                        alt={"garden with rocks"}
                        radius={45}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <CldImage
                        src="qhhg1qcxfp5b3p8veknu" 
                        width="500" 
                        height="500"
                        crop={{
                          type: "auto",
                          source: true,
                        }}
                        alt={"flower bed"}
                        radius={45}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <CldImage
                        src="qhhg1qcxfp5b3p8veknu" 
                        width="500"
                        height="500"
                        crop={{
                          type: "auto",
                          source: true,
                        }}
                        alt={"sloped flower bed"}
                        radius={45}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div >
                      <CldImage
                        src="qhhg1qcxfp5b3p8veknu"
                        width="500" 
                        height="500"
                        crop={{
                          type: "auto",
                          source: true,
                        }}
                        alt={"zen garden"}
                        radius={45}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <CldImage
                        src="qhhg1qcxfp5b3p8veknu"
                        width="500" 
                        height="500"
                        crop={{
                          type: "auto",
                          source: true,
                        }}
                        alt={"entrance garden"}
                        radius={45}
                      />
                    </div>
                    <div className="mb-5"></div>
                  </div>
                  <div className="col">
                    <div>
                      <CldImage
                        src="qhhg1qcxfp5b3p8veknu"
                        width="500" 
                        height="500"
                        crop={{
                          type: "auto",
                          source: true,
                        }}
                        alt={"new sod installation"}
                        radius={45}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <Reviews />
              </section>
            </>
          </div>
        </main>
      </div>
    </>
  );
}
