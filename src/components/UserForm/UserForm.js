import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services";
import {userValidators} from "../../validators/userValidators";
import {joiResolver} from "@hookform/resolvers/joi";

const UserForm = ({setUsers}) => {
   const {register, handleSubmit, reset, formState: {isValid}} = useForm({
       mode:'all',
       resolver:joiResolver(userValidators)
   });


    const submit = async (user) => {
      const {data} = await userService.create(user);
        setUsers(prev=>[...prev, data])
        reset()
    }

    return (
        <form onClick={handleSubmit(submit)}>
            <input type="text" placeholder= {'name'} {...register('name')} />
            <input type="text" placeholder= {'username'} {...register('username')} />
            <input type="text" placeholder= {'email'} {...register('email')} />
            <input type="text" placeholder= {'phone'} {...register('phone')} />
            <button disabled={!isValid}>Save</button>
        </form>

    );
};

export {UserForm}