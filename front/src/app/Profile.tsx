import Head from 'next/head'
import React from 'react'
import styles from "/src/styles/Profile.module.css";


const Profile = () => {
   
  return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header><img src="/next.svg"/></header>
        <h4 className={styles.pcolor}>名前</h4>
    </div>
  )
}

export default Profile