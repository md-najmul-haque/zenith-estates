import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    let errorItem;

    if (gError || fError) {
        return (

            errorItem = <p className='text-center text-red-600'>Error: {gError?.message || fError?.message}</p>

        );
    }
    if (gLoading || fLoading) {
        return <Loading />
    }

    if (gUser || fUser) {
        navigate('/')
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

                        <input type="submit" class="btn btn-primary w-full max-w-xs text-white mb-2" value='Login' />
                        <small>New in Zenith Estates?<Link to='/signup' class="text-blue-600 pl-2">Create New Account</Link></small>
                    </form>
                    {errorItem}
                    <div class="divider">or</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-primary text-white">Continue with Google</button>
                    <button onClick={() => signInWithFacebook()} class="btn btn-primary text-white">Continue with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;