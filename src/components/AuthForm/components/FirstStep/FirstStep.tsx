import { FormInput } from 'components/ui/FormInput';
import { FormSelect } from 'components/ui/FormSelect';
import { useFormContext } from 'react-hook-form';

import styles from './FirstStep.module.scss';

export const FirstStep = () => {
  const { control } = useFormContext();

  return (
    <div className={styles.FormWrapper}>
      <FormInput control={control} label="Nickname" name="nickname" placeholder="Nickname" />
      <FormInput control={control} label="Name" name="name" placeholder="Name" />
      <FormInput control={control} label="Sername" name="sername" placeholder="Sername" />
      <FormSelect control={control} label="Sex" name="sex" />
    </div>
  );
};
