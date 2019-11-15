import React, { useState, useMemo } from 'react';
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
    setValues({ ...values, [event.target.name]: Number(event.target.value) });
  };

  const garden = useMemo(
    () => gardenHelper.draw(values.width, values.height, values.padding),
    [values]
  );

  return (
    <div>
      <h2>King's Garden</h2>
      <div className={styles.fields}>
        <NumberField
          name="width"
          value={values.width}
          label={'Width'}
          min={20}
          onChange={hanldeFieldChange}
        />
        <NumberField
          name="height"
          value={values.height}
          label={'Height'}
          min={20}
          onChange={hanldeFieldChange}
        />
        <NumberField
          name="padding"
          value={values.padding}
          label={'Padding'}
          min={4}
          onChange={hanldeFieldChange}
        />
      </div>
      <Garden garden={garden} />
    </div>
  );
};

export default MainPage;
