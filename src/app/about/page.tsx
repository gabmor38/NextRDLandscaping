'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import { CldImage } from "next-cloudinary";


export default function About() {
  return (

    <div
  id="about"
  className="mt-5 flex flex-col items-center"
>
  <div className="mx-auto p-2">
    <h1 className="mx-auto p-2 text-3xl font-bold">Our Story</h1>
  </div>

  <div className="mx-auto p-2">
    <h2 className="text-2xl text-olive-600 text-center">
    Bacon ipsum dolor amet ullamco
    </h2>
  </div>

  <div className=" mb-5 p-5" style={{border: '0px'}}>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
      <div className="w-full md:w-1/3 flex justify-center">
      <CldImage
        src="cld-sample-2"
        width="500"
        height="500"
        crop={{
          type: "auto",
          source: true,
        }}
        alt={"garden with pond"}
        radius={45}
      />
      </div>
      <div className="w-full md:w-2/3">
        <div className="card-body text-justify">
          <p className="text-lg">
          Turkey spare ribs strip steak kevin. Boudin ground round buffalo rump, meatball meatloaf drumstick brisket doner turkey jerky biltong cow. Boudin hamburger jowl, meatball turkey ribeye ball tip sirloin. Turducken turkey boudin ham hock, prosciutto tongue shank. Chislic beef ribs leberkas salami meatball rump.
          </p>

          <p className="text-lg mt-4">
          Bacon ipsum dolor amet ullamco pancetta cow ipsum id nulla in incididunt. Cillum incididunt pork belly, proident commodo kielbasa quis do.
          </p>

          <p className="text-lg mt-4">
            Bacon ipsum dolor amet ullamco pancetta cow ipsum id nulla in incididunt. Cillum incididunt pork belly, proident commodo kielbasa quis do.
            WBacon ipsum dolor amet ullamco pancetta cow ipsum id nulla in incididunt. Cillum incididunt pork belly, proident commodo kielbasa quis do.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-5 mb-5"></div>
</div>

  );
  }