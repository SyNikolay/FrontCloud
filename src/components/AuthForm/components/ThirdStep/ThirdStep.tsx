import { FormInput } from 'components/ui/FormInput';
import { useFormContext } from 'react-hook-form';

import styles from './ThirdStep.module.scss';

export const ThirdStep = () => {
  const { control } = useFormContext();

  return (
    <div className={styles.FormWrapper}>
      <FormInput rows={4} multiline control={control} label="About" name="about" placeholder="About" />
    </div>
  );
};
