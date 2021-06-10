import React from 'react';
import Product from './Product';

function Feed({products}) {
    return (
        <div>
            {
                products.map(({id, title, description, category, image}) => (
                    <Product
                        key={id}
                        title={title}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))
            }
        </div>
    );
}

export default Feed;
