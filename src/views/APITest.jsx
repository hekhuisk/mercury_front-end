import React from "react";
import Button from "@material-ui/core/Button";

import * as userAPI from "../api/UserAPI";

const handleCreateUser = () => {
    const user = {
        username: 'Kyle'
    };
    userAPI.createUser(user);
};

const handleDeleteUser = () => {
    userAPI.deleteUser(1);
};

const handleGetAllUser = () => {
    userAPI.getAllUsers();
};

const handleGetUser = () => {
    userAPI.getUser(1);
};

const handleUpdateUser = () => {
    const user = {
        userID: 1,
        username: 'Hekhuis'
    };
    userAPI.updateUser(1, user);
};


const APITest = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <label>Category API Test</label>

            <label>Debt API Test</label>

            <label>Expense API Test</label>

            <label>Income API Test</label>

            <label>Payment Source API Test</label>

            <label>User API Test</label>
            <Button
                variant="contained"
                color="primary"
                onClick={handleCreateUser}
            >
                Create User
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleDeleteUser}
            >
                Delete User
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGetAllUser}
            >
                Get All User
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGetUser}
            >
                Get User
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateUser}
            >
                Update User
            </Button>
        </div>
    );
};

export default APITest;