import React from 'react';

const AuthorAddress = (props) => {
    return (
        <div>
            <div className="authorDetailsDivs">
                <h2>Address</h2>
                <p>street: {props.street}</p>
                <p>city: {props.city}</p>
                <p>zipcode: {props.zip}</p>
            </div>
            <img className="authorImages" src='https://www.ydesignservices.com/wp-content/uploads/2016/07/Googlemap-600x551.jpg'
            />
        </div>
    )
}

export default AuthorAddress;