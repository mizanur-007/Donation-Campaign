import { useLoaderData, useNavigate } from "react-router-dom";
import All_Category from "../../All_category/All_Category";
import Banner from "../../Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {
  const allDonations = useLoaderData() || [];
  const [displayData, setDisplayData] = useState(allDonations);
  const [inputText, setInputText]= useState("");

  const handleValue=(e)=>{
    let inputValue = e.target.value;
    setInputText(inputValue);
  }

  const handleSearch=()=>{
    const searchedData = allDonations.filter(item => item.category.toLowerCase()===inputText.toLocaleLowerCase());
    setDisplayData(searchedData);
    document.getElementById('inputSearch').value="";
  }

  useEffect(()=>{
    setDisplayData(allDonations);
  },[])

  return (
    <>
      <Banner handleValue={handleValue} handleSearch={handleSearch}></Banner>
      <All_Category displayData={displayData}></All_Category>
    </>
  );
};

export default Home;
