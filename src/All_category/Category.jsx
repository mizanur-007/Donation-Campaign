import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Category = ({ donationsCategory }) => {

    const {color_card_bg,color_category_bg, color_text_button, id, picture, category, title} = donationsCategory
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
    
      return (
          <Link to={`/details/${id}`} state={title}>
                <div className="card card-compact" style={cardStyle}>
          <figure>
            <img className='w-[450px]' src={picture} alt={category} />
          </figure>
          <div className="card-body">
            <div  style={categoryStyle} className="w-max py-[2px] px-2 rounded-lg">
            <h3 className="font-medium text-sm text-center">{category}</h3>
            </div>
            <h2   style={titleStyle} className="font-semibold text-lg flex flex-grow">{title}</h2>
          </div>
        </div>
        </Link>
      );
};
Category.propTypes = {
    donationsCategory: PropTypes.object
  };

export default Category;