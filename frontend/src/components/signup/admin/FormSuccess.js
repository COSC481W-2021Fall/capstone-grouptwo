import React from 'react';
import './Form.css';
// import { useEffect} from 'react';
// import UserActions from "../../../services/userAction";

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Thank you for signing up!</h1>
      <img className='form-img-2' src='/img/img-3.svg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;