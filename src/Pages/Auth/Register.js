import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { accountService } from '../../_services/'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function Register() {
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate()

    const [credentials, setCredentials] = useState("")

    // const onChange = (e) => {
    //     setCredentials({
    //         ...credentials,
    //         [e.target.name]: e.target.value
    //     })
    // }
    const onSubmit = async (e) => {
        if(e.password !== e.passwordConfirm){
            toast.error("Les mots de passe ne correspondent pas");
        } else {
            accountService.register(e)
            .then((res) => {
                if (res.data.etat===false) {
                    if(res.data.message !== "requette invalide"){

                        toast.error(res.data.message);
                    }
                } else {
                    setCredentials([e, ...credentials]);
                    console.log(res.data) 
                    toast.success("Inscription réussie");
                    navigate('/admin')
                }
            })
            // setCredentials([e, ...credentials]);
            // navigate('/admin')
            // toast.success("Inscription réussie");
                // .then(res => {
                //     console.log(res)
                //     accountService.saveToken(res.data.id)
                //     navigate('/')
                // })
                // .catch(error => console.log(error))  
        }
        
              
        
    }
  return (
    <section className="container d-flex flex-column vh-100">
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
            <div className="col-lg-5 col-md-8 py-8 py-xl-0">
            {/* Card */}
            <div className="card shadow">
                {/* Card body */}
                <div className="card-body p-6">
                <div className="mb-4">
                    <a href="../index.html"><img src="../assets/images/brand/logo/logo-icon.svg" className="mb-4" alt="logo" /></a>
                    <h1 className="mb-1 fw-bold">Sign up</h1>
                    <span>
                    Already have an account?
                    <a href="/auth/login" className="ms-1">Sign in</a>
                    </span>
                </div>
                {/* Form */}
                <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                    {/* Username */}
                    <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input type="text" className="form-control"
                            {...register('username')} placeholder="User Name" required 
                        />
                        <div className="invalid-feedback">Please enter valid username.</div>
                    </div>
                    {/* Last_Name */}
                    <div className="mb-3">
                        <label className="form-label">User last_name</label>
                        <input type="text" className="form-control"
                            {...register('last_name')} placeholder="User last_name" required 
                        />
                        <div className="invalid-feedback">Please enter valid last_name.</div>
                    </div>
                    {/* First_Name */}
                    <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">first_name Name</label>
                            <input type="text" className="form-control"

                                {...register('first_name')} placeholder="User first_name" required 
                            />
                        <div className="invalid-feedback">Please enter valid first_name.</div>
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                            <input type="email" className="form-control"  
                                {...register('email')} placeholder="Email address here" required
                            />
                        <div className="invalid-feedback">Please enter valid Email.</div>
                    </div>
                    {/* Numero */}
                    <div className="mb-3">
                        <label className="form-label">Numero</label>
                            <input type="number" className="form-control" 
                                {...register('numero')} placeholder="Numero de tel" required 
                            />
                        <div className="invalid-feedback">Please enter valid Email.</div>
                    </div>
                    {/* Type de compte */}
                    <div className="mb-3">
                        <select class="form-select" 
                            
                            {...register('type_compte')}>
                            <option selected>type_compte</option>
                            <option >..</option>
                            <option value="apprenant">Student</option>
                            <option value="instructeur">Instructeur</option>
                        </select>
                        <div className="invalid-feedback">Please enter valid type_compte.</div>
                    </div>
                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control"
                            {...register('password')} placeholder="**************" required 
                        />
                        <div className="invalid-feedback">Please enter valid password.</div>
                    </div>
                    {/* PasswordConfirmation */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control"
                            {...register('passwordConfirm')} placeholder="**************" required 
                        />
                        <div className="invalid-feedback">Please enter valid password.</div>
                    </div>
                    
                    <div>
                    {/* Button */}
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Create Free Account</button>
                    </div>
                    </div>
                    <hr className="my-4" />
                    <div className="mt-4 text-center">
                    {/*Facebook*/}
                    <a href="#" className="btn-social btn-social-outline btn-facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-facebook mb-1" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                        </path></svg>
                    </a>
                    {/*Twitter*/}
                    <a href="#" className="btn-social btn-social-outline btn-twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-twitter mb-1" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                        </path></svg>
                    </a>
                    {/*LinkedIn*/}
                    <a href="#" className="btn-social btn-social-outline btn-linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-linkedin mb-1" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                        </path></svg>
                    </a>
                    {/*GitHub*/}
                    <a href="#" className="btn-social btn-social-outline btn-github">
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-github mb-1" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                        </path></svg>
                    </a>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    </section>

  )
}
