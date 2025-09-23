import React from 'react'

const SinglePageTrending = () => {
  return (
    <div className="container-fluid mt-5 mb-3 pt-3">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="section-title border-right-0 mb-0" style={{width: "180px"}}>
                        <h4 className="m-0 text-uppercase font-weight-bold">Tranding</h4>
                    </div>
                    <div className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center bg-white border border-left-0"
                        style={{ width: 'calc(100% - 180px)', paddingRight: "100px" }}>
                        <div className="text-truncate"><a className="text-secondary text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div>
                        <div className="text-truncate"><a className="text-secondary text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePageTrending