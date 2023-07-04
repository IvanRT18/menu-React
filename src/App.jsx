import { useState } from "react";
import Title from "./Title";
import menuData from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const uniqueCategories = [
  "all",
  ...new Set(
    menuData.map((itemMenu) => {
      return itemMenu.category;
    })
  ),
];

const App = () => {
  const [items, setItems] = useState(menuData);

  const [categories, setCategories] = useState(uniqueCategories);

  const filterMenu = (category) => {
    console.log(category);
    if (category === "all") {
      setItems(menuData);
      return;
    }
    const categoriesSelected = menuData.filter((categoryItem) => {
      return categoryItem.category === category;
    });
    console.log(categoriesSelected);
    setItems(categoriesSelected);
  };

  return (
    <menu>
      <section className="menu">
        <Title text="Our menu" />
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu items={items} />
      </section>
    </menu>
  );
};
export default App;
