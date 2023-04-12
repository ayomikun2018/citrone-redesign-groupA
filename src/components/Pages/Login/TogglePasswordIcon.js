import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"



const Togglepassword = () => {
    const [visible, setVisiblility]= useState(true);

    const icon = <FontAwesomeIcon icon={ visible ? "eye-slash" : "eye"} 
        onClick={ () =>{ setVisiblility(visiblity => !visiblity)}}
        />
    

    const InputType = visible ? "text" : "password";

    return [InputType, icon];
};

export default Togglepassword;