import React from 'react';

const AuthorName = (props) => {
    return (
        <div>
            <img className="authorImages" src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown'
            />
            <div className="authorDetailsDivs">
                <h2>{props.name}</h2>
                <p>username: {props.userName}</p>
                <p>email: {props.email}</p>
                <p>phone: {props.phone}</p>
            </div>
        </div>
    )
}

export default AuthorName;