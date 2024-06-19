import React, { FC } from 'react';
import styles from './page.module.scss';

type ContainerBoxProps = {
  children: React.ReactNode,
  title: String,
}

const ContainerBox: FC<ContainerBoxProps> = (props) => {
  return (
    <>
      <div className={styles.title}>{props.title}</div>
      {props.children}
    </>
  )
}

export default ContainerBox;