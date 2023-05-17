import React from 'react'


// mapping of each category as button that will display each button
const Categories = ({ categories, filterAll }) => {
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return (
                    <button type='button' className='filter-btn'
                        key={index} onClick={() => filterAll(category)}>
                        {category}
                    </button>


                )
            })}
        </div >
    )
}

export default Categories
