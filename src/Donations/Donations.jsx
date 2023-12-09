import { useEffect, useState } from "react";
import Donation from "./Donation";

const Donations = () => {
  const [data, setData] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  useEffect(() => {
    const getLocalData = JSON.parse(localStorage.getItem("donations")) || [];
    setData(getLocalData);
  }, []);

  const handleSeeAll=()=>{
      setSeeAll(true);
  }
  const displayData = seeAll ? data : data.slice(0,4);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-6 mt-16 mb-8 px-5 md:px-2 lg:px-0">
        {
        displayData.map((donationdata) => (
          <Donation
            key={donationdata.id}
            donationdata={donationdata}
          ></Donation>
        ))}
      </div>
      <div className={`${seeAll? 'hidden':''} flex justify-center items-center mb-16`}>
        <button
          onClick={handleSeeAll}
          className={`${data.length < 5 ? "hidden" : ""} bg-[#009444] rounded-lg font-semibold text-white py-2 px-4`}
        >
          See All
        </button>
      </div>
    </>
  );
};

export default Donations;
