import { Grid, Modal, TextField, Fade, Button } from "@mui/material"
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { modalStyle, textField } from "./muiStyles";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./authSlice";
import {Spinner} from "../ReUse/Spinner"
import { toast } from "react-toastify";


const emailRegex = /^\S+@\S+$/i;

const schema = yup.object({
    firstName: yup.string().required('Enter Firstname'),
    lastName: yup.string().required('Enter Lastname'),
    email:yup.string().required("Enter Your email"),
    password:yup.string().required("Enter Password"),
    confirmPassword: yup.string().required("re-type new password for confirmation")
    .oneOf([yup.ref('password')], 'Passwords does not match'),
  }).required();



const RegisterModal =({regisModal,setRegisModal}) =>{
  const navigate = useNavigate()
  const [signUp,{isLoading,data,error}] = useRegisterMutation()

    const { register, formState: { errors,dirtyFields }, handleSubmit, getValues,reset} = useForm({
        resolver: yupResolver(schema),
         defaultValues: { firstName: "",lastName:"",email:"",password:"" }
      });
    const handleRegisClose =()=>{
      setRegisModal(false)
    }
    const [step,setStep] = useState(1)

    const handleNexStep =()=>{
      setTimeout(()=>{
        setStep(prev=>prev+1)
      },500)
      console.log("next step")
    }
    const handleLastStep =()=>{
      setStep(prev=>prev-1)
    }

    const onSubmit =(data,event)=>{
      signUp(data)
    }
    useEffect(()=>{
      if(data?.code && data?.code !== 'SUCCESS'){
        toast.error("An error occured during registeration",{position:toast.POSITION.TOP_RIGHT})
          reset()
          handleRegisClose()
          setStep(1)
      }
      if(data?.code === 'SUCCESS'){
        toast.success("Registration succesfull",{position:toast.POSITION.TOP_RIGHT})
      }
    },[data])
    const [email,setEmail] = useState("");
    const [emailValid,setEmailValid] = useState(false);

    const [p,sp] = useState("") //Password, Set Password
    const [cP,sCp] = useState("") // Confirm password , set Confirm password

    const validateStepOne = ()=>{
      if(dirtyFields.email && dirtyFields.firstName && dirtyFields.lastName && emailValid){
        return false
      }
      return true
    }

    const validateStepTwo = ()=>{
      if(dirtyFields.password && p === cP){
        return false
      }
      return true
    }

    useEffect(()=>{
      setEmailValid(emailRegex.test(email))
    },[email])


    return(
      <Modal
        open={regisModal}
        onClose={handleRegisClose}
        
        >
        <div style={modalStyle} className="registerModal">
          <div className="modal-container">
            <div className="modal-header">
              <h3>Step {step} of 3</h3>
              <h1>Create Your account </h1>
            </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Fade in={step===1}>
                  <div style={{ display: step === 1 ? 'block' : 'none' }}>
                    <Grid container spacing={2}>
                        <Grid item xl={6} lg={6} md={6} sm={12}>
                            <TextField error={errors.firstName?true:false} fullWidth type="text" sx={textField}  label="First-name" {...register("firstName")} />
                            <span>{errors.firstName?.message}</span>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12}>
                            <TextField error={errors.lastName?true:false} fullWidth type="text" sx={textField} label="Last-name" {...register("lastName")} />
                            <span>{errors.lastName?.message}</span>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <TextField onInput={e=>setEmail(e.target.value)} error={errors.email?true:false} fullWidth type="email" sx={textField} label="Email" {...register("email")} />
                            <span>{errors.email?.message}</span>
                        </Grid>
                    </Grid>
                  </div>
                </Fade>
                <Fade in={step===2}>
                  <div style={{ display: step === 2 ? 'block' : 'none' }}>
                    <Grid container spacing={2}>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <TextField onInput={e=>sp(e.target.value)} error={errors.password?true:false} fullWidth type="password" sx={textField} label="password" {...register("password")} />
                            <span>{errors.password?.message}</span>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <TextField onInput={e=>sCp(e.target.value)} error={cP!==p} fullWidth type="password" sx={textField} label="confirm password" {...register("confirmPassword")} />
                            <span>{errors.confirmPassword?.message}</span>
                        </Grid>
                    </Grid>
                  </div>
                </Fade>
                <Fade in={step===3}>
                  <div style={{ display: step === 3 ? 'block' : 'none' }}>
                    <Grid container spacing={2}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                          <TextField InputProps={{readOnly:true}} fullWidth type="text" sx={textField}  label="First-name" value={getValues("firstName")} />   
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12}>
                            <TextField InputProps={{readOnly:true}} fullWidth type="text" sx={textField} label="Last-name" value={getValues("lastName")} />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <TextField InputProps={{readOnly:true}} value={getValues("email")} fullWidth type="email" sx={textField} label="Email" />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <TextField InputProps={{readOnly:true}}  fullWidth type="password" sx={textField} label="password" value={getValues("password")} />
                        </Grid>
                    </Grid>
                  </div>
                </Fade>
                  <div className="btnContainer">
                    <Button disabled={step===1} variant="contained" onClick={handleLastStep}>Previous</Button>
                    {step===3?( isLoading?(
                      <Spinner />
                    ):(
                      <Button variant="outlined" type="submit">Create Account</Button>
                    )
                    ):step===1?(
                        <Button type="button" variant="contained" disabled={validateStepOne()} onClick={handleNexStep}>Next</Button>
                    ):(
                        <Button type="button" variant="contained" disabled={validateStepTwo()} onClick={handleNexStep}>Next</Button>
                    )}
                  </div>
              </form>
            </div>
        </div>
      </Modal>
    )
  }

  export default RegisterModal
