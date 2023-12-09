import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donation = ({ donationdata }) => {
    const {color_card_bg,color_category_bg, color_text_button, id, picture, category, title,price} = donationdata;
    const cardStyle = {
        backgroundColor: color_card_bg,
      };
      const categoryStyle = {
        backgroundColor: color_category_bg,
        color: color_text_button
      };
      const titleStyle = {
        color: color_text_button
      };
      const buttonStyle = {
        backgroundColor: color_text_button
      };


  return (
    <div className="flex items-center gap-4 rounded-lg" style={cardStyle}>
      <div className="flex-1">
        <img className="rounded-l-lg h-[175px]" src={picture} alt="" />
      </div>
      <div className="flex-1">
        <div style={categoryStyle} className="w-max py-1 px-2 rounded my-1">
          <h3 className="font-medium text-sm text-center">{category}</h3>
        </div>
        <h2 className="font-semibold text-xl lg:text-[22px] text-[#0B0B0B]">{title}</h2>
        <h3 style={titleStyle} className="font-semibold my-1">${price}</h3>
        <Link  to={`/details/${id}`} state={title}>
        <button style={buttonStyle} className="text-white rounded py-2 px-3 mt-1 font-medium inline-flex content-center">View Details</button>
        </Link>
      </div>
    </div>
  );
};

Donation.propTypes = {
  donationdata: PropTypes.object,
};

export default Donation;
