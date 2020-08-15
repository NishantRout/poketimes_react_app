import React from 'react';

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt in saepe illo voluptas error ab itaque eligendi nobis magni vero libero atque delectus, quasi quis debitis fugiat adipisci dolores?</p>
        </div>
    );
}

export default Contact;