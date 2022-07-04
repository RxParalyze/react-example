import React, { useState } from 'react';
import UserForm from "./UserForm";

const AddUser = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        };
        props.onAddUser(userData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="add-user">
            {!isEditing && <button onClick={startEditingHandler}>Add User</button>}
            {isEditing && (
                <UserForm
                    onSaveUserData={saveUserDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
}

export default AddUser;