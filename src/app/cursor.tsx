/* eslint-disable @typescript-eslint/no-explicit-any */
'client side'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Cursor() {

    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
      });

    const [cursorVariant, setCursorVariant] = useState("default")
    
    
      useEffect(() => {
        const mouseMove = (e: { clientX: any; clientY: any; }) => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
      
        window.addEventListener("mousemove", mouseMove);
      
        return () => {
          window.removeEventListener("mousemove", mouseMove)
        }
      }, [ ])

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: 'yellow'
        }
    
    }

    return (
       <div >
        <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        >
        </motion.div>
       </div>
    )

}