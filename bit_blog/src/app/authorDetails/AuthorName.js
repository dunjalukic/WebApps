import React from 'react';

const AuthorName = (props) => {
    return (
        <div>
            <img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown'
            />
            <div>
                <p>{props.name}</p>
                <p>{props.userName}</p>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    )
}

export default AuthorName;