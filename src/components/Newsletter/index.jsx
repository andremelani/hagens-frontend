import React from 'react'
import styles from './styles.module.scss'
import {Send} from '@mui/icons-material';


const Newsletter = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Newsletter</h1>
        <p className={styles.description}>Get timely updates from yout favorite products.</p>
        <div className={styles.inputContainer}>
            <input placeholder='Your email' />
            <button>
              <Send />
            </button>
        </div>
    </div>
  )
}

export default Newsletter
