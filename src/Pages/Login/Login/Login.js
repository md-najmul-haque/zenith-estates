import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (



        <div className='h-screen flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h2 className='text-center text-3xl pb-3'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Enter Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email address is required'
                                    },

                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/,
                                        message: 'Please enter valid email address'
                                    }
                                })} />
                            <label class="label label-text-alt">
                                {errors.email?.type === 'required' && <span className='text-red-600'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-600'>{errors.email.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password address is required'
                                    },

                                    minLength: {
                                        value: 6,
                                        message: 'Password minimum length should be six characters'
                                    }
                                })} />
                            <label class="label label-text-alt">
                                {errors.password?.type === 'required' && <span className='text-red-600'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>{errors.password.message}</span>}
                            </label>
                        </div>

                        <input type="submit" class="btn btn-primary w-full max-w-xs" value='Login' />
                        <p className='mt-2'>New in Zenith Estates?<Link to='/signup' class="text-blue-600 pl-2">Create New Account</Link></p>
                    </form>
                    <div class="divider">or</div>
                    <button class="btn btn-primary">Continue with Google</button>
                    <button class="btn btn-primary">Continue with Facebook</button>
                </div>
            </div>



        </div>
    );
};

export default Login;