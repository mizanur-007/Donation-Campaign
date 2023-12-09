import React from "react";
import PropTypes from 'prop-types';

const Banner = ({handleSearch,handleValue}) => {
  return (
  <>
        <div className="background-image-container mt-6">
        <div className="background-image"></div>

        <div className="overlay"></div>
      </div>
      <div className="z-10 absolute top-56 md:left-28 lg:top-72 lg:left-80">
        <h1 className="text-[#0B0B0B] text-4xl font-bold text-center">
          I Grow By Helping People In Need
        </h1>
        <div className="rounded flex items-center justify-center mt-4">
          <input onChange={handleValue} id="inputSearch"
            className="border-solid border-l-[1px] border-b-[1px] border-t-[1px] border-[#DEDEDE] pl-3 py-[10px] rounded-l-lg text-[#0b0b0b66] text-sm"
            placeholder="search here..."
            type="text"
          />
          <button onClick={handleSearch} className="bg-[#FF444A] rounded-r-lg px-3 py-2 text-white font-semibold">
            Search
          </button>
        </div>
      </div>
  </>
  )
};

Banner.propTypes = {
  searchRef: PropTypes.object,
  handleSearch:PropTypes.func,
  handleValue:PropTypes.func
};
export default Banner;
