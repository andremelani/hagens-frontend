import React from 'react'
import styles from './styles.module.scss'
import { categories } from '../../data/categories'
//COMPONENTS
import CategoryItem from '../CategoryItem'


const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map((item) => {
        return(
            <CategoryItem key={item.id} item={item}/>
        )
      })}
    </div>
  )
}

export default Categories
