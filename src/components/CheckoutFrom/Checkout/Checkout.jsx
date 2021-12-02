import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

import { commerce } from '../../../lib/commerce';
import useStyles from './checkoutStyles'
import PickupForm from '../PickupForm';
import PaymentForm from '../PaymentForm';

const steps = ['Contact Information', 'Payment Details']

const Checkout = ({ cart }) => {
  const [ activeStep, setActiveStep ] = useState(0);
  const [ orderData, setOrderData ] = useState({});
  const [ checkoutToken, setCheckoutToken ] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
        console.log(token);
        setCheckoutToken(token);
      } catch (error) {
        
      }
    }

    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  
  const next = (data) => {
    setOrderData(data); 
    nextStep();
  }

  const Confirmation = () => (
    <div>
      Confirmation
    </div>
  )

  const Form = () => activeStep === 0 
    ? <PickupForm next={next} checkoutToken={checkoutToken} /> 
    : <PaymentForm orderData={orderData} checkoutToken={checkoutToken} backStep={backStep}/>
  
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  )
}

export default Checkout
