import React, {useState} from 'react';
import Image from 'next/image'
import {StarIcon} from '@heroicons/react/solid';

function Product({id, title, description, category, image}) {

    const [rating] = useState(2);

    return (
        <div>
            <p>
                {category}
            </p>

            <Image
                src={image}
                alt='Products'
                width={200}
                height={200}
                objectFit='contain'
            />

            <h4>
                {title}
            </h4>

            <div className='flex'>
                {
                    Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon className='h-5' />
                    ))
                }
            </div>

            <p>

            </p>

            <p>

            </p>
        </div>
    );
}

export default Product;
