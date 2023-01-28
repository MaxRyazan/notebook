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

    async createNote(name, description) {
        const id = +store.state.notes[store.state.notes.length - 1].id + 1
        try{
            await fetch(`http://localhost:8081`, {
                method: 'POST',
                body: JSON.stringify({id: id, name: name, description: description}),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
        } catch (e) {
            console.error('Не удалось отправить данные !')
        }
    }
}

export default new Actions()