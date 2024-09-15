import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { meals_URL as url } from '../../Utils/constants';
import {BsArrowUpCircle} from 'react-icons/bs'
import Loading from '../Pages/Loading';

const MealsList = ({ meals }) => {

    /*TOP_SCROLL*/
    const clickToTop = ()=>{
        window.scrollTo(0,0)
    };


    return (
        <section className='meals d-flex flex-wrap justify-content-center'>
            <Link to='/meals'>
                < BsArrowUpCircle className='btn-up' onClick={clickToTop}/>
            </Link> 

            <section className='meals'>
                <div className='container'>
                    <div className='row'>
                            {meals.map(item => {
                                const { _id, title, image, category, description, price } = item;
                                    return(
                                            <div className='col-md-4'>
                                                <div key={_id} className='meals-content' >
                                                        <div className='meal-discp'>
                                                            <Link to={`/meals/${_id}`} className='text-decoration-none'>
                                                                <img src={image} className='w-100' alt="img" />
                                                            </Link>
                                                            <div className='meal-title'>
                                                                <div className='meal-tl'>
                                                                    {title}
                                                                </div>
                                                                <div className='meal-discp'>
                                                                    <div className='meal-cat'>
                                                                        <h4>{category}</h4>
                                                                    </div>
                                                                    <div className='meal-price'>
                                                                        <p>₹ {price}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        )
                            })}
                    </div>
                 </div>   
            </section>
        </section>
    )
}

export default MealsList
