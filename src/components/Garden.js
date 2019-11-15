import React, { useMemo } from 'react';
import styles from './Garden.module.css';
import * as gardenHelper from '../utils/garden-helper';

const MainPage = ({ garden }) => {
  const printedGarden = useMemo(() => gardenHelper.print(garden), [garden]);
  return <div className={styles.container}>{printedGarden}</div>;
};

export default MainPage;
