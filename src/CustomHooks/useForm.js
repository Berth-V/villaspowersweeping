import {useState} from 'react';

const useForm = () => {
  const initialData = {
    name: '',
    email: '',
    message: '',
  };
  const [form, setForm] = useState(initialData);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const onValidate = (form) => {
    const regexName = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regexMessage = /^.{1,150}$/;

    if (!regexName.test(form.name)) {
      setErrorMsg('Name must content 3-40 characters');
      return false;
    }
    if (!regexEmail.test(form.email)) {
      setErrorMsg('Invalid E-mail');
      return false;
    }
    if (!regexMessage.test(form.message)) {
      setErrorMsg('Message must content 1-150 characters');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  };

  const onResetForm = () => {
    setForm(initialData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = onValidate(form);
    const data = {form};
    if (isValid == true) {
      try {
        const response = await fetch('https://formspree.io/f/meqnlwpj', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          setError(true);
          console.log('Message Sent');
          setErrorMsg('Message Sent');
          // Clear Msg //
          setTimeout(() => {
            setErrorMsg('');
            setError(false);
          }, 2500);
          // Clear Form //
          onResetForm();
        } else {
          console.error('Error');
        }
      } catch (error) {
        console.error('Site Error:', error);
      }
    }
    return isValid;
  };
  return {form, error, errorMsg, handleChange, handleSubmit};
};

export default useForm;
