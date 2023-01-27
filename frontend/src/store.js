import { createStore } from "vuex";
import {reactive} from "vue";

export default createStore({
    state:{
        notes: reactive([]),
    }
})