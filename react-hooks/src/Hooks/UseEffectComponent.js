import {useEffect, useState} from "react";

const orders = [100,200,300];
export default function UseEffectComponent() {
     const [title, setTitle] = useState('')
     const [products, setProducts] = useState([])

    // 1. useEffect(callback)
    // useEffect(() => {
    //     fetch("https://dummyjson.com/products")
    //         .then(res => res.json())
    //         .then(products => setProducts(products))
    // });

    // 2. useEffect(callback, [])
    // useEffect(() => {
    //     fetch("https://dummyjson.com/products")
    //         .then(res => res.json())
    //         .then(products => setProducts(products))
    // }, []);

    // 3. useEffect(callback, [dependencies])
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(res => {
                setProducts(res.products)
            })

        // Cleanup function
        return () => {
            console.log('unmounting....')
        }
    }, [title]);

     // 4. cleanup function
    // useEffect(() => {
    //     const timerId = setInterval(() => {
    //         console.log('timer')
    //     }, 1000)
    //
    //     return () => clearInterval(timerId)
    // })

    return (
        <>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <ul>
                {
                    products.map(
                        product => (
                            <li key={product.id}>{product.title}</li>
                        )
                    )
                }
            </ul>
        </>
    )
}