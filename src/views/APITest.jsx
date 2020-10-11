import React from "react";
import Button from "@material-ui/core/Button";

import * as budgetAPI from "../api/BudgetAPI";
import * as userAPI from "../api/UserAPI";

const handleCreateBudget = () => {
    budgetAPI.createBudget();
};

const handleDeleteBudget = () => {
    budgetAPI.deleteBudget();
};

const handleGetAllBudget = () => {
    budgetAPI.getAllBudgets();
};

const handleGetBudget = () => {
    budgetAPI.getBudget();
};

const handleUpdateBudget = () => {
    budgetAPI.updateBudget();
};

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
            <label>Budget API Test</label>
            <Button
                variant="contained"
                color="primary"
                onClick={handleCreateBudget}
            >
                Create Budget
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleDeleteBudget}
            >
                Delete Budget
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGetAllBudget}
            >
                Get All Budget
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGetBudget}
            >
                Get Budget
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateBudget}
            >
                Update Budget
            </Button>


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