import React from 'react'


const Foods = ({ data }) => {
    // if you pass another name in the map it will be data={the name} in app js when rendering it.
    return (
        <div className='section-center'>
            {data.map((foodMenu) => {
                const { id, title, price, img, desc } = foodMenu;
                return (
                    <article key={id} className='menu-item'>
                        <img src={img} className='photo' alt={title} />
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                );
            })};

        </div>

    );
};

export default Foods
