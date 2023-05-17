import React, { useState } from 'react'
import { data } from './Components/data';
import Categories from './Components/Categories'
import Food from './Components/Foods'


//unique category to display cat in nav automatically
//instead of doing it manually once new data is added
//(using set will only get the unique values)
const allCategories = ['all', ...new Set(data.map((data) => data.category))];

function App() {
  const [foodMenu, setFoodMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  //filter all food and if cat = all display all the food 
  //filter food category alone cat by cat
  const filterAll = (category) => {
    if (category === 'all') {
      setFoodMenu(data);
      return
    }
    const filterFood = data.filter((data) => data.category === category);
    setFoodMenu(filterFood);

  };

  return (
    <main>
      <section className="menu section">
        <div className='title'>
          <h2>Check our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterAll={filterAll} />
        <Food data={foodMenu} />
      </section>
    </main>
  );
}

export default App;
