import store from "@/store";

class SyncMethods{
    searchNote(event){
        if(event.target.value) {
            let val = event.target.value
            store.state.notes = store.state.notes.filter(n => ( n.name.toLowerCase() ).includes( val.trim().toLowerCase() ))
        }
    }
}

export default new SyncMethods()