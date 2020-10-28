import React from 'react';
import styles from './ProductCard.module.scss'

const ProductCard = (props) => {
    const {description= 'Сервант Savoi 165x80 черный шпон дуба', price='55 992 руб.'} = props
    return (
        <div className={styles.card}><img src='../../static/cards/image%209.png'/>
            <div className={styles.description}>{description}</div>
            <div className={styles.price}>{price}</div>
        </div>
    );
};

export default ProductCard;
