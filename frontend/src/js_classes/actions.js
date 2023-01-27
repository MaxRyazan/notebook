import store from "@/store";

class Actions {
    async getNotes() {
        try{
            const data = await fetch(`http://localhost:8081`)
            store.state.notes = await data.json()
        } catch (e) {
            console.error('Не удалось получить данные !')
        }
    }
}

export default new Actions()