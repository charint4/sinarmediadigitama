import React from 'react'
import Data from "./Data"

const SectionQt = () => {
  return (
    <>
    {Data.map ((data, index) => (
      <div className="bg-navy py-150 text-center">
        <h2 className="fw-bold fs-sm-title">{data.head}</h2>
        <h2 className="fw-bold fs-big quote">
          {data.subhead}
        </h2>
      </div>
    ))}
    </>
  )
}

export default SectionQt