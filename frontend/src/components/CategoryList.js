import React from 'react';
import { Link } from 'react-router-dom';


function CategoryList(props) {
  return (
    <React.Fragment>
      <h2>Categories:</h2>
      {
        props.categories.map((category) => {
          return (
            <Link key={category} to={`/${category}/posts`}>{category}</Link>
          );
        })
      }
    </React.Fragment>
  );
}


export default CategoryList;
