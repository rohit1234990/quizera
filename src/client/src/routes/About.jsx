import React from "react";

const AboutUs = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <h1 className="font-weight-bold text-info text-center">
        <i className="fas fa-users" /> About Us
      </h1>

      <div>
        <div className="jumbotron bg-white text-center hoverable p-4 m-5">
          <div className="row">
            <div className="col-md-4 offset-md-1 mx-3 my-3">
              <div className="view overlay">
                <img src="" className="img-fluid" alt="Sample pic" />
              </div>
            </div>
            <div className="col-md-7 text-md-left ml-3 mt-3">
              <div>
                <h6 className="h6 pb-1 text-primary">
                  <i className="fas fa-desktop pr-1" />
                  Who are We?
                </h6>
              </div>

              <h4 className="h4 mb-4">Our Founders</h4>

              <p className="font-weight-normal">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur.
              </p>
            </div>
          </div>
        </div>

        <div className="jumbotron bg-white text-center hoverable p-4 m-5">
          <div className="row">
            <div className="col-md-7 text-md-left ml-3 mt-3">
              <div>
                <h6 className="h6 pb-1 text-primary">
                  <i className="fas fa-desktop pr-1" />
                  What are We?
                </h6>
              </div>

              <h4 className="h4 mb-4">History and Vision</h4>

              <p className="font-weight-normal">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur.
              </p>
            </div>
            <div className="col-md-4 offset-md-1 mx-3 my-3">
              <div className="view overlay">
                <img src="" className="img-fluid" alt="Sample pic" />
                <a href="#!">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
