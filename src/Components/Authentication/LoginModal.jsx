import { Button, Fade, Grid, Modal, TextField } from "@mui/material"
import { modalStyle, textField } from "./muiStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { useLoginMutation } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../ReUse/Spinner";
import { useEffect } from "react";
import { toast } from "react-toastify";

  const schema = yup.object({
    email:yup.string().required("Enter Your email"),
    password:yup.string().required("Enter Password"),
  }).required();

const LoginModal =({loginModal,setLoginModal}) =>{
  const navigate = useNavigate()
  const [signIn,{isLoading,data,error}] = useLoginMutation()
    const handleLoginClose = ()=>{
      setLoginModal(false)
    }
    const validateForm = ()=>{
      if(dirtyFields.email && dirtyFields.password){
        return false
      }
      return true
    }

    const { register, formState: { errors,dirtyFields }, handleSubmit, getValues,reset} = useForm({
      resolver: yupResolver(schema),
       defaultValues: {email:"",password:"" }
    });


    const onSubmit =(data,event)=>{
      signIn(data)
    }
    console.log(data)
    console.log(error)

    useEffect(()=>{
      console.log("sdsdsd")
      if(data?.code && data?.code !== 'SUCCESS'){
        toast.error("Wrong email or password",{position:toast.POSITION.TOP_RIGHT})
          reset()
      }
      if(data?.code === 'SUCCESS'){
        toast.success("Login Success",{position:toast.POSITION.TOP_RIGHT})
      }
      if(error){
        toast.error("Wrong email or password",{position:toast.POSITION.TOP_RIGHT})
          reset()
      }
    },[data,error])

    return(
      <Modal 
        open={loginModal}
        onClose={handleLoginClose}
        >
          <div style={modalStyle} className="registerModal">
                  <div className="modal-container">
                      <div className="modal-header">
                        <h1>Login</h1>
                      </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2}>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <TextField error={errors.password?true:false} fullWidth type="email" sx={textField} label="email" {...register("email")} />
                            <span>{errors.email?.message}</span>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12}>
                            <TextField fullWidth type="password" sx={textField} label="password" {...register("password")} />
                            <span>{errors.password?.message}</span>
                        </Grid>
                    </Grid>
                    <div className="btnContainer">
                    { isLoading?(
                      <Spinner />
                    ):(
                      <Button disabled={validateForm()} variant="contained" type="submit">Login</Button>
                    )
                    }
                    </div>
                    </form>
                  </div>
          </div>
        
      </Modal>
    )
  }

  export default LoginModal
