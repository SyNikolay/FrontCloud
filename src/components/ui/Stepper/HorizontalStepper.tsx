import { useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';

import { StepIconProps } from '@mui/material/StepIcon';
import { getAuthFormStep } from 'components/AuthForm/slice';
import { QontoConnector, QontoStepIconRoot } from './HorizontalStepper.styles';

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
    </QontoStepIconRoot>
  );
}

const steps = ['', '', ''];

export default function CustomizedSteppers() {
  const stepIdx = useSelector(getAuthFormStep);

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={stepIdx} connector={<QontoConnector />}>
        {steps.map((label, i) => (
          <Step key={i}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
