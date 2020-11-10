import {layoutConfig} from '../configs/layoutConfig';

const layout = (state = layoutConfig, action) => {
    switch (action.type) {
        case 'CHANGE_LAYOUT':
            return {
                ...state,
                ...action.layout,
            };
        default:
            return state;
    }
};

export default layout;
