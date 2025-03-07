'use client'

import { faQuoteRight } from "@fortawesome/free-solid-svg-icons/faQuoteRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Reviews() {
  return (
    <div
        id="reviews"
        className="mt-5 pb-5 flex flex-column "
        style={{ alignItems: "center"}}
    >
        <div className="mx-auto p-2 ">
            <h1 className="display-4 mb-5 text-drop-shadow">Customer Reviews</h1>
        </div>

        <div className ="container text-center">
        <div className="row row-cols-1 row-cols-xl-3 g-5">
        <div className="col">
          <div className="card ">
            <FontAwesomeIcon icon={faQuoteRight} size={'2xl'} className="mt-3"/>
            <div className="card-body m-3">
              <blockquote className="blockquote mb-0">
              <p className="card-text"> Bacon ipsum dolor amet ullamco pancetta cow ipsum id nulla in incididunt. Cillum incididunt pork belly, proident commodo kielbasa quis do. Voluptate fatback adipisicing frankfurter ground round ut ribeye andouille cupim labore. Andouille sirloin cupim kielbasa sint. Ribeye ut tail, exercitation officia non fatback irure short loin consectetur buffalo ham. Veniam short loin pancetta pork belly jowl excepteur, mollit et leberkas sunt.</p>
              </blockquote>
              <div className=" text-body-secondary mt-3">
                <footer className="blockquote-footer mt-3"> <cite title="Source Title">Name</cite></footer>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <FontAwesomeIcon icon={faQuoteRight} size={'2xl'} className="mt-3"/>
            <div className="card-body m-3">
              <blockquote className="blockquote mb-0">
              <p className="card-text">Bacon ipsum dolor amet ullamco pancetta cow ipsum id nulla in incididunt. Cillum incididunt pork belly, proident commodo kielbasa quis do. Voluptate fatback adipisicing frankfurter ground round ut ribeye andouille cupim labore. Andouille sirloin cupim kielbasa sint. Ribeye ut tail, exercitation officia non fatback irure short loin consectetur buffalo ham. Veniam short loin pancetta pork belly jowl excepteur, mollit et leberkas sunt.
              </p>
              </blockquote>
              <div className="text-body-secondary mt-3">
                <footer className="blockquote-footer mt-3"> <cite title="Source Title">Name</cite></footer>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
        <div className="card ">
            <FontAwesomeIcon icon={faQuoteRight} size={'2xl'} className="mt-3"/>
            <div className="card-body m-3">
              <blockquote className="blockquote mb-0">
              <p className="card-text">Bacon ipsum dolor amet ullamco pancetta cow ipsum id nulla in incididunt. Cillum incididunt pork belly, proident commodo kielbasa quis do. Voluptate fatback adipisicing frankfurter ground round ut ribeye andouille cupim labore. Andouille sirloin cupim kielbasa sint. Ribeye ut tail, exercitation officia non fatback irure short loin consectetur buffalo ham. Veniam short loin pancetta pork belly jowl excepteur, mollit et leberkas sunt.
              </p>
              </blockquote>
              <div className="text-body-secondary mt-3">
                <footer className="blockquote-footer mt-3"> <cite title="Source Title">Name</cite></footer>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      </div>
    </div>

  );
}
