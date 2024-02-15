import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'

import toast from 'react-hot-toast';

import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import { examenService, qcmService } from '../../../_services';
import QcmCard from './QcmCard';
import { useParams } from 'react-router-dom';
import FormationContext from '../../../components/UseContext/formation.context';



export default function QcmDetail() {
  const { user } = useContext(FormationContext)
  let {slug} = useParams()
  const [examen, setExamen] = useState([]);
  const [messa, setMessa] = useState([]);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    examen['nom'] = "ok";
    examen['apprenant_id'] = user;
    examen['duree'] = '2';
    examen['point'] = '2';

    // console.log("rr", examen)
    examenService.addExamen(examen)
      .then((response) => {
        console.log("UpdateForma",response.data);
        // Faire quelque chose avec la réponse
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
  };
  // console.log('yyeess',examen)
  const pere = (message) => {
    // messa = message
    // console.log('yyeess',message)
    setExamen(message)
}

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //Pour les Qcm
  const sluger = {
    "formation_slug": slug
  }
  const [qcms, setQcm] = useState([]);
  const flag = useRef(false)
  useEffect(()=>{

      if(flag.current===false){
      qcmService.getQcm(sluger)
      .then(res => {
          if(res.data.etat===true){
              setQcm(res.data.donnee);
          } else {
              toast.error("Ont n'arrivent pas recuperer les QCM ");
          }
      })
      .catch(error => 
          toast.error("Erreur connexion")
          )
      }
  
      return () => flag.current = true;;;
  
  },[]);
    
  return (
    
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {qcms.map((step, index) => (
          <Step key={step.label}>
            <div>{step.nom}</div>
            {step.description}
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              
              <Typography>
              {/* Card Qcm */}
              <QcmCard index={step} petit={pere} />

              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === qcms.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === qcms.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
