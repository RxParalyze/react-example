import React from "react";

import Card from "../UI/Card";

const User = (props) => {
    return (
        <li>
            <Card className='user'>
                <div className="user__description">
                    <h2>{props.username}</h2>
                    <div className="user__age">{props.age}</div>
                </div>
            </Card>
        </li>
    );
};

export default User;