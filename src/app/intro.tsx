'client side'

import { CldImage } from "next-cloudinary";

export default function Intro() {



    return (
        <div id="intro" className="intro">
            {/* <Spline scene="https://prod.spline.design/ManFBAIp7JpLenYa/scene.splinecode" /> */}
            <CldImage
            src="yjxxvritcttzkfkjhzqk" 
            width="500"
            height="500"
            alt={"logo"}
            style={{padding:'10px'}}
            />

        </div>

    )
};