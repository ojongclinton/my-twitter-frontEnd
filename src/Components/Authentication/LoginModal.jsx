import { Modal } from "@mui/material"

const modalStyle ={
    backgroundColor:"#1A2421",
    color:"white",
    position:"absolute",
    left:"20%",
    top:"10%",
    maxWidth:"600px",
    padding:"30px"
  }

const LoginModal =({loginModal,setLoginModal}) =>{
    const handleLoginClose = ()=>{
      setLoginModal(false)
    }
    return(
      <Modal 
        open={loginModal}
        onClose={handleLoginClose}
        >
          <div style={modalStyle}>
             <p>Login Modal dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus possimus accusamus voluptates, suscipit alias quisquam magni architecto perferendis praesentium?</p>
          </div>
        
      </Modal>
    )
  }

  export default LoginModal
