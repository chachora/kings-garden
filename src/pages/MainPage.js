import React, { useState } from 'react';
import Garden from '../components/Garden';
import NumberField from '../components/NumberField';
import * as gardenHelper from '../utils/garden-helper';
import styles from './MainPage.module.css';

const MainPage = () => {
  const [values, setValues] = useState({
    height: 20,
    width: 20,
    padding: 4,
  });

  const hanldeFieldChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>King's Garden</h2>
      <div className={styles.fields}>
        <NumberField
          name="width"
          value={values.width}
          label={'Width'}
          onChange={hanldeFieldChange}
        />
        <NumberField
          name="height"
          value={values.height}
          label={'Height'}
          onChange={hanldeFieldChange}
        />
        <NumberField
          name="padding"
          value={values.padding}
          label={'Padding'}
          onChange={hanldeFieldChange}
        />
      </div>
      <Garden />
    </div>
  );
};

export default MainPage;
