import React from 'react';
import Card from 'react-bootstrap/Card';

const CategoryItem = ({category}) => {
    // console.log(category)
    
    return (
        <Card className='p-4 mx-3 rounded-2 category-item'>
            <div className='bg-secondary bg-opacity-25 w-25 py-2 rounded-2'>
            <img src={category.logo} className='w-full mx-auto d-block' alt="" />
            </div>
            <h4 className='mt-4'>{category.category}</h4>
            <p>{category.quantity}</p>
        </Card>
    );
};

export default CategoryItem;