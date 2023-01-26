import { createStore } from "vuex";
import {reactive} from "vue";

export default createStore({
    state:{
        notes: reactive([
            {
                id: 1,
                title: 'note1',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci commodi, consequatur dolore doloribus earum eos id, iste mollitia neque odit sit soluta suscipit ut voluptatibus. Debitis id nisi tempora.'
            },
            {
                id: 2,
                title: 'note2',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci commodi, consequatur dolore doloribus earum eos id, iste mollitia neque odit sit soluta suscipit ut voluptatibus. Debitis id nisi tempora.' +
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci commodi, consequatur dolore doloribus earum eos id, iste mollitia neque odit sit soluta suscipit ut voluptatibus. Debitis id nisi tempora.' +
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci commodi, consequatur dolore doloribus earum eos id, iste mollitia neque odit sit soluta suscipit ut voluptatibus. Debitis id nisi tempora.'
            },
            {
                id: 3,
                title: 'note3',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci commodi, consequatur dolore doloribus earum eos id, iste mollitia neque odit sit soluta suscipit ut voluptatibus. Debitis id nisi tempora.' +
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci commodi, consequatur dolore doloribus earum eos id, iste mollitia neque odit sit soluta suscipit ut voluptatibus. Debitis id nisi tempora.' +
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci commodi, consequatur dolore doloribus earum eos id, iste mollitia neque odit sit soluta suscipit ut voluptatibus. Debitis id nisi tempora.'
            }
        ]),
    }
})