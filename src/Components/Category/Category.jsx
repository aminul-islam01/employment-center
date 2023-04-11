import React, { useEffect, useState } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import CardGroup from 'react-bootstrap/CardGroup';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect( ()=> {
        fetch('./public/Catagory.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    }, [])
    return (
        <div className='mb-5'>
            <h2 className='text-center fw-bold fs-1 mb-3'>Job Category List</h2>
            <p className='text-center mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <CardGroup>
            {
                categories.map(category => <CategoryItem
                category={category}
                key={category.id}>
                </CategoryItem>)
            }
            </CardGroup>
        </div>
    );
};

export default Category;