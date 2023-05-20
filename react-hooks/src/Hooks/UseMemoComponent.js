import {useMemo, useState} from "react";

export default function UseMemoComponent() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [products, setProducts] = useState([])

    const total = useMemo(() => {
        const result = products.reduce((result, product) => {
            console.log(111);
            return result + product.price;
        }, 0)

        return result;
    }, [products])

    const handleSubmit = () => {
        setProducts([
            ...products,
            {
                name,
                price: +price
            }
        ])
    };

    return (
        <>
            <div>
                <label>Name</label>
                <input
                    type={'text'}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Price</label>
                <input
                    type={'number'}
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
            </div>
            <div>
                <button type={'button'} onClick={handleSubmit}>
                    Add
                </button>
            </div>
            <div>
                Total: {total}
            </div>
            <ul>
                {
                    products.map(
                        (product, index) => (
                            <li key={index}>
                                {product.name} - {product.price}
                            </li>
                        )
                    )
                }
            </ul>
        </>
    )
}