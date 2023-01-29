import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validators/commentValidator";
import {commentService} from "../../services";


   const CommentForm = ({setComments}) => {
       const {register, handleSubmit, reset, formState:{isValid}} = useForm({
            mode:"all",
            resolver:joiResolver(commentValidator)
       })

   const submit = async (comment) => {
       const {data} = await commentService.create(comment);
      setComments(prev=> [...prev, data])
   reset()
    }

    return (
        <form onClick={handleSubmit(submit)}>
            <input type={"text"} placeholder={'name'} {...register ('name')}/>
            <input type={"text"} placeholder={'email'} {...register ('email')}/>
            <input type={"text"} placeholder={'body'} {...register ('body')}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {
    CommentForm
}