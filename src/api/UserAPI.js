import * as FetchUtils from '../utils/FetchUtils';

const createUser = (user) => {
    return FetchUtils.fetchPOST('/user', user);
};

const deleteUser = (userID) => {
    return FetchUtils.fetchDELETE(`/user/${userID}`);
};

const getAllUsers = () => {
    return FetchUtils.fetchGET('/user');
}

const getUser = (userID) => {
    return FetchUtils.fetchGET(`/user/${userID}`);
};

const updateUser = (userID, user) => {
    return FetchUtils.fetchPUT(`/user/${userID}`, user);
};

export {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
};