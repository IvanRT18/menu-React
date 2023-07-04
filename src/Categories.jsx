const Categories = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            key={category}
            className="btn"
            data-category={category}
            onClick={() => {
              filterMenu(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
