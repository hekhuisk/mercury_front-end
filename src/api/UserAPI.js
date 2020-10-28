import * as FetchUtil from '../util/FetchUtil';

const createUser = (user) => {
    return FetchUtil.fetchPOST('/user', user);
};

const deleteUser = (userID) => {
    return FetchUtil.fetchDELETE(`/user/${userID}`);
};

const getAllUsers = () => {
    return FetchUtil.fetchGET('/user');
}

const getUser = (userID) => {
    return FetchUtil.fetchGET(`/user/${userID}`);
};

const updateUser = (userID, user) => {
    return FetchUtil.fetchPUT(`/user/${userID}`, user);
};

export {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
};