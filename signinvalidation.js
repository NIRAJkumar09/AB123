
const signinvalidation=(udata)=>{
    let errors={};

    if(!udata.uname){
        errors.uname='Name is required'
    }
   
    if(!udata.upassword){
        errors.upassword='password is requried'
    }
    

     return errors;
}

export default signinvalidation;