import { Store } from 'vuex';

import messages from './messages';

export default new Store({
    strict: true, //<-- so Vue warns me when doing mutations outside of vuex
    modules: {
        messages
    }
});