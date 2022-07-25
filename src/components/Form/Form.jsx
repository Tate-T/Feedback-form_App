import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addFeedback } from '../../redux/feedbackOperations';
import s from './Form.module.css';
import styled from 'styled-components';

const Form = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  const nameValidation = {
    required: 'validation.required',
    minLength: {
      value: 1,
      message: 'validation.length',
    },
    maxLength: {
      value: 254,
      message: 'max - 254 letters',
    },
  };

  const emailValidation = {
    required: 'validation.required',
    minLength: {
      value: 1,
      message: 'validation.length',
    },
    maxLength: {
      value: 254,
      message: 'max - 254 letters',
    },
  };

  const messageValidation = {
    required: 'validation.required',
    minLength: {
      value: 1,
      message: 'validation.length',
    },
    maxLength: {
      value: 254,
      message: 'max - 700 letters',
    },
  };

  const Btn = styled.button`
    margin-top: 23px;
    margin-bottom: 174px;
    width: 218px;
    height: 73px;
    left: 150px;
    top: 681px;
    background: #fad34f;
    border: 0px;
    border-radius: 500px;
    font-family: 'Apercu Arabic Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #ffffff;
    text-align: center;
  `;

  const onSubmit = feedback => {
    dispatch(addFeedback(feedback));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            {...register('name', nameValidation)}
            className={s.input}
          />
        </label>
        {errors && <p>{'Something went wrong'}</p>}
      </div>
      <div>
        <label>
          <input
            type="text"
            name="email"
            placeholder="Your e-mail*"
            {...register('email', emailValidation)}
            className={s.input}
          />
        </label>
        {errors && <p>{'Something went wrong'}</p>}
      </div>
      <div>
        <label>
          <input
            type="text"
            name="message"
            placeholder="Your message*"
            {...register('message', messageValidation)}
            className={s.inputMessage}
          />
        </label>
        {errors && <p>{'Something went wrong'}</p>}
      </div>
      <Btn type="submit">Send message</Btn>
    </form>
  );
};

export default Form;
