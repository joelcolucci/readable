import React from 'react';
import { Link } from 'react-router-dom';


function CategoryList(props) {
  return (
    <div className="category-list">
      <h2 className="category-list-heading">Categories</h2>
      <ul className="category-list-items">
        <li className="category-list-item"><Link to="/" className="link">View all</Link></li>
        {
          props.categories.map((category) => {
            return (
              <li key={category} className="category-list-item">
                <Link
                  to={`/${category}`}
                  className="link">{category}</Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}


export default CategoryList;
