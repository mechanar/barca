import React from 'react'
import styles from './page.module.scss'

import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {

    const [values, setValues] = React.useState([]);

    React.useEffect(() => {
        fetch("http://front.rt.ru:3001/api/data").then(res => res.json()).then(result => setValues(result.data))
    }, []);


    return <div className={styles.pageTemplate}>
        {
            values.map(v => <ProductCard value={v}/>)
        }
    </div>
}

export default Home
