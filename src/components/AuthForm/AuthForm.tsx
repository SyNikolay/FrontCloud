import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import { useYupValidationResolver } from 'hooks';
import { authPageValidationSchema } from 'utils';
import { AuthFormType } from 'types';
import { useSendAuthFormMutation } from 'store/api/sendForm';

import CustomizedSteppers from 'components/ui/Stepper/HorizontalStepper';
import { Button } from 'components/ui/Button';
import { FirstStep, SecondStep, ThirdStep } from './components';

import { getAuthFormStep, getAuthFormValues, setFormValues, setNextStepIdx, setPrevStepIdx } from './slice';
import { getAuthState } from 'components/Auth/slice';

import styles from './AuthForm.module.scss';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stepIdx = useSelector(getAuthFormStep);
  const formValues = useSelector(getAuthFormValues);
  const { email, phone } = useSelector(getAuthState);
  const resolver = useYupValidationResolver(authPageValidationSchema);
  const [sendForm] = useSendAuthFormMutation();
  const form = useForm<AuthFormType>({
    resolver,
    defaultValues: formValues,
    shouldFocusError: true,
  });

  const watch = form.watch();
  console.log(watch);

  const onPrevStep = () => {
    dispatch(setFormValues(watch));
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

  const getCurrentStepComponent = (stepIdx: number): ReactNode => {
    switch (stepIdx) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
    }
  };

  useEffect(() => {
    form.setValue('phone', phone);
    form.setValue('email', email);
  }, []);

  const getCurrentStepButton = (stepIdx: number): ReactNode => {
    switch (stepIdx) {
      case 2:
        return (
          <>
            <Button onClick={() => onPrevStep()} variant="secondary">
              Назад
            </Button>
            <Button type="submit" variant="primary">
              Отправить
            </Button>
          </>
        );
      default:
        return (
          <>
            <Button onClick={() => onPrevStep()} variant="secondary">
              Назад
            </Button>
            <Button type="button" variant="primary" onClick={() => onNextStep()}>
              Далее
            </Button>
          </>
        );
    }
  };

  const onSubmit = async (data: any) => {
    await sendForm(data).unwrap();
  };

  return (
    <div className={styles.Form}>
      <CustomizedSteppers />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {getCurrentStepComponent(stepIdx)}
          <div className={styles.Buttons}>{getCurrentStepButton(stepIdx)}</div>
        </form>
      </FormProvider>
    </div>
  );
};
