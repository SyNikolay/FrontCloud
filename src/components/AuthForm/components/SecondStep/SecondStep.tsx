import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Button } from 'components/ui/Button';
import { FormInput } from 'components/ui/FormInput';

import styles from './SecondStep.module.scss';
import { Title } from 'components/ui/Title';
import { CheckBox } from 'components/ui/Checkbox';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const VALUES = [1, 2, 3];

export const SecondStep = () => {
  const { control, setValue, watch } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: 'advantages',
    control,
  });

  const checkboxGroup = watch('checkbox');
  const radioGroup = watch('radio');

  const checkoboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue('checkbox', [...checkboxGroup, +e.target.value]);
    } else {
      setValue(
        'checkbox',
        checkboxGroup.filter((el: number) => el !== +e.target.value)
      );
    }
  };

  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('radio', e.target.value);
  };

  return (
    <div className={styles.FormWrapper}>
      <div>
        <Title variant="h5" className={styles.Title}>
          Advantages
        </Title>
        <div className={styles.Fields}>
          {!!fields.length &&
            fields.map((field, index) => {
              return (
                <div key={field.id} className={styles.Field}>
                  <FormInput control={control} name={`advantages[${index}]`} placeholder="placeholder" />
                  <img onClick={() => remove(index)} src="./images/icons/delete.png" alt="Delete." />
                </div>
              );
            })}
        </div>

        <Button className={styles.AddButton} variant="secondary" onClick={() => append('')}>
          +
        </Button>
      </div>
      <div className={styles.Block}>
        <Title variant="h5" className={styles.Title}>
          Checkbox group
        </Title>
        {VALUES.map((val) => (
          <CheckBox
            key={val}
            label={`${val}`}
            value={val}
            checked={checkboxGroup.includes(val)}
            onChange={checkoboxChangeHandler}
            sx={{
              '&.MuiCheckbox-root': {
                padding: '3px 8px 0 0',
              },
            }}
          />
        ))}
      </div>
      <div className={styles.Block}>
        <Title variant="h5" className={styles.Title}>
          Radio group
        </Title>
        <RadioGroup onChange={radioChangeHandler}>
          {VALUES.map((val) => {
            return (
              <FormControlLabel
                key={val}
                value={val}
                control={
                  <Radio
                    checked={+radioGroup === val}
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 22,
                      },
                      '&.MuiRadio-root': {
                        padding: '3px 8px',
                      },
                    }}
                  />
                }
                label={`${val}`}
              />
            );
          })}
        </RadioGroup>
      </div>
    </div>
  );
};
