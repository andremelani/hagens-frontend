import React from 'react'
import { categories } from '../../data/categories'
import CategoryItem from '../CategoryItem'
import styles from './styles.module.scss'

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
