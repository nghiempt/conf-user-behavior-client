import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Step01 from './step_01';
import Step02 from './step_02';
import Step03 from './step_03';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CREATE_SURVEY } from '@/fetch/fetch_data';
import { useState } from 'react';
import { ROUTE } from '@/constant/route';
import Cookie from 'js-cookie';

const steps = ['Provide App Info', 'User Behavior', 'Reason'];

export default function CustomStepper() {

    const account = Cookie.get('account');

    const [appId, setAppId] = useState('')
    const [reason, setReason] = useState('')
    const [behavior, setBehavior] = useState('')
    const [opIcr, setOpIcr] = useState(false)
    const [opIcm, setOpIcm] = useState(false)
    const [opIcs, setOpIcs] = useState(false)

    const handleSubmit = async () => {
        const payload = {
            survey_op_icr: opIcr,
            survey_op_icm: opIcm,
            survey_op_ics: opIcs,
            survey_behavior: behavior,
            survey_reason: reason,
            account_id: JSON.parse(account || '')?.account_id,
            app_id: parseInt(appId)
        }
        const fetchCreateSurvey = await CREATE_SURVEY(payload)
        if (fetchCreateSurvey?.success) {
            window.location.href = ROUTE.CHOOSE
        } else {
            alert('Fail')
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleRender = (activeStep: any) => {
        switch (activeStep) {
            case 0:
                return (
                    <Step01 setOpIcr={setOpIcr} setOpIcm={setOpIcm} setOpIcs={setOpIcs} setAppId={setAppId} />
                );
            case 1:
                return (
                    <Step02 setBehavior={setBehavior} />
                );
            case 2:
                return (
                    <Step03 setReason={setReason} handleSubmit={handleSubmit} />
                );
            default:
                return (
                    <Step01 setOpIcr={setOpIcr} setOpIcm={setOpIcm} setOpIcs={setOpIcs} setAppId={setAppId} />
                );
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            <h1 className='text-[18px]'>{label}</h1>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
                        {
                            activeStep === 0 ? <div></div> : <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className='!bg-gray-300 !text-gray-700 !font-semibold !text-[14px] !px-6'
                            >
                                <ArrowBackIcon className='mr-2' /> BACK STEP
                            </Button>
                        }
                        <Box sx={{ flex: '1 1 auto' }} />
                        {
                            activeStep === 2 ? <div></div> : <Button onClick={handleNext} className='!bg-[rgb(var(--primary-rgb))] !text-white !font-semibold !text-[14px] !px-6'>
                                NEXT STEP <ArrowForwardIcon className='ml-2' />
                            </Button>
                        }
                    </Box>
                    <div className='h-[20px]'></div>
                    <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                        {
                            handleRender(activeStep)
                        }
                    </Typography>
                </React.Fragment>
            </div>
        </Box>
    );
}
