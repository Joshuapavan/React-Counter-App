import React, {useState} from 'react';

function MyComponent(){

    let [name, setName] = useState('Guest');
    let [age, setAge] = useState(0);
    const [isAdult, setIsAdult] = useState(false);

    const updateName = () =>{
        setName("Pavan")
    }

    const increaseAge = () =>{
        setAge(age);
    }

    const changeAdultStatus = () =>{
        setIsAdult(!isAdult);
    }
    
    return(
        <div>
            <p>{`Hello ${name}`}</p>
            <button onClick={updateName}>Set Name</button>

            <p>{`Age : ${age}`}</p>
            <button onClick={increaseAge}>Increment Age</button>

            <p>{`Adult? : ${isAdult ? "Yes" : "No"}`}</p>
            <button onClick={changeAdultStatus}>Is Adult</button>


        </div>
    );
}

export default MyComponent;