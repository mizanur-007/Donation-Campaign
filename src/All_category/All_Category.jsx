
import Category from "./Category";
import PropTypes from 'prop-types';

const All_Category = ({displayData}) => {
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mt-20 gap-5 mb-32 px-4 lg:px-0">
        {
          displayData?.map(donationsCategory=> <Category key={donationsCategory.id} donationsCategory={donationsCategory}></Category>)
        }
    </div>
    );
  };

  All_Category.propTypes = {
    displayData: PropTypes.array
  };
  
  export default All_Category;
  