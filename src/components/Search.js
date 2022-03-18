import React, { useState } from 'react';
import styledComponents from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input type="text" value={input} onChange={inputHandler} />
      </div>
    </FormStyle>
  );
};

const FormStyle = styledComponents.form`
margin: 0rem 20rem;
position: relative;

div{
  width: 100%;
  position: relative;
}

input{
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: white;
  padding: 1rem 3rem;
  border-radius: 1rem;
  outline: none;
  width: 100%;
}

svg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(100%, -50%);
  color: white;
}`;
export default Search;