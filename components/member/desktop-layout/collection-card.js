import React, { useEffect, useState } from 'react'
import styles from './collection-card.module.scss'
import { BsFillXCircleFill } from 'react-icons/bs'
import Link from 'next/link'

// import axiosInstance, { fetcher } from '@/services/axios-instance'

export default function CollectionCard({
  actname = '',
  cover = '',
  descriptions = '',
  actClass = '',
  activity_id = '',
  setActids,
  handleDelete = () => {},
}) {
  // const getFavID = (activity_id) => {
  //   setActids(activity_id)
  //   console.log(activity_id)
  // }
  return (
    <>
      <div className={styles['collection-card']}>
        <div className="card">
          <button
            className={`${styles['close-btn']}`}
            onClick={() => {
              handleDelete(activity_id)
            }}
          >
            <BsFillXCircleFill className="chr-h5" />
          </button>
          <img src={cover} className={`card-img-top`} alt="..." />
          <div className="card-body p-2 p-md-3">
            <div
              className={`${styles['text-truncate-ellipsis']} ${styles['card-title']}`}
            >
              {actname}
            </div>
            <p
              className={`${styles['multiline-ellipsis']} ${styles['card-text']}`}
            >
              {descriptions}
            </p>
            <div className="d-flex">
              <Link
                href={`/Activity/${activity_id}`}
                className="text-decoration-none ms-auto"
              >
                查看更多...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
