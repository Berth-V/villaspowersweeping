import {useState} from 'react';

const useForm = (initialData, onValidate) => {
  const [form, setForm] = useState(initialData);
  const [error, setError] = useState([]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  };

  const handleSubmit = (e) => {
    const error = onValidate(form);
    if (error[0]) {
      e.preventDefault();
      setError(error);
    } else {
      console.log('Sending...');
    }
  };
  return {form, error, handleChange, handleSubmit};
};

export default useForm;
