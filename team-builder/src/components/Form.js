import React from "react";


const Form = (props) => {

    const changeHandler = event => { //function | event = keypress 
        props.blue({
          ...props.green,
          [event.target.name]: event.target.value
        });
      };

console.log(props);

    return(
    <form>
        <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={changeHandler}/>
        <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={changeHandler}/>
        <label htmlFor="role">Role</label>
          <input type="text" name="role" onChange={changeHandler}/>
    </form>

    )};

    export default Form

//console.log(Form);