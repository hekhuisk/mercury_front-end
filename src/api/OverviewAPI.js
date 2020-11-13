import * as FetchUtil from '../util/FetchUtil';

const getOverview = (year) => {
    return FetchUtil.fetchGET(`/overview/${year}`);
};

export {
    getOverview
}