import { createStore } from "vuex";
import {reactive, ref} from "vue";

export default createStore({
    state:{
        notes: reactive([]),
        name: ref(''),
        description: ref('')
    }
})