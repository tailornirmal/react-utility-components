import React, { useState } from 'react';

const ProductList = () => {
    const [items, setItems] = useState(Array(10).fill(null));

    const loadMore = () => {
        setItems(prevItems => [...prevItems, ...Array(10).fill(null)]);
    };

    let arr = [8,9,85,10,52,85,41,25,25];
    let group = 2;
    let output = [[8,9],[85,10],[52,85],[41,25],[25]];



    return (
        <div>
            <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </select>
            <div>
                {items.map((item, index) => (
                    <div key={index} className="row">
                        Row {index + 1}
                    </div>
                ))}
            </div>
            {
                Array(10).fill(null).map((item, index) => (
                    
                );
            }
            <button onClick={loadMore}>Load More</button>
        </div>
    );
};

export default ProductList;