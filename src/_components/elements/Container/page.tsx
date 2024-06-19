'use client';

import React, { FC, useState, useEffect } from "react"
import axios from "axios";
import styles from "./page.module.scss";

export interface ContainerListProps {
  model: string
}

type FetchDbData = {
  id: number,
  content: String,
  xorder: number
}

const ContainerList: FC<ContainerListProps> = (props) => {
  const [data, setData] = useState<FetchDbData[]>([])
  const fetchDbData = async () => {
    const result = await axios(`api/${props.model}`);
    setData(result.data);
  }

  useEffect(() => {
    fetchDbData()
  }, []);

  return (
    <div className={styles.container}>
        {data?.map((obj)=> {
          return <div key={obj.id}>{obj.content}</div>
        })} 
    </div>
  )
}

export default ContainerList