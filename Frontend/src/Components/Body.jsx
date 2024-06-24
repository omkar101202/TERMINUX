import React from 'react'
import Terminal from './Terminal'
import styles from "./Body.module.css"

function Body() {
  return (
   <>
    <div className={styles.body}>
        <Terminal/>
    </div>
    </>
  )
}

export default Body