import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import { useYupValidationResolver } from 'hooks';
import { authPageValidationSchema, defaultValues } from 'utils';
import { AuthFormType } from 'types';

import CustomizedSteppers from 'components/ui/Stepper/HorizontalStepper';
import { Button } from 'components/ui/Button';
import { FirstStep, SecondStep, ThirdStep } from './components';

import { getAuthFormStep, setNextStepIdx, setPrevStepIdx } from './slice';

import styles from './AuthForm.module.scss';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stepIdx = useSelector(getAuthFormStep);
  const resolver = useYupValidationResolver(authPageValidationSchema);
  const form = useForm<AuthFormType>({
    resolver,
    defaultValues,
    mode: 'onChange',
  });

  const onPrevStep = () => {
    if (stepIdx > 0) {
      dispatch(setPrevStepIdx());
    } else {
      navigate('/auth');
    }
  };

  const onNextStep = () => {
    if (stepIdx < 2) {
      dispatch(setNextStepIdx());
    }
  };

  const getCurrentStepComponent = (stepIdx: number): any => {
    switch (stepIdx) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
    }
  };

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.Form}>
      <CustomizedSteppers />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {getCurrentStepComponent(stepIdx)}
          <div className={styles.Buttons}>
            <Button onClick={() => onPrevStep()} variant="secondary">
              Назад
            </Button>
            <Button type="button" variant="primary" onClick={() => onNextStep()}>
              Далее
            </Button>
            <Button type="submit" variant="primary">
              AA
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
