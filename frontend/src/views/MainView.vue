<template>
    <div class="main-view_container">
        <div class="main-view_create">
            <h2 class="title">Блокнот для заметок</h2>
            <div class="create_container">
                <input type="text" name="desc" class="create_input" autofocus placeholder="Введите название заметки">
                <textarea name="body" id="" cols="30" rows="10" class="create_input textarea" placeholder="Введите текст заметки"></textarea>
            </div>
            <button class="button in_create">Добавить заметку</button>
        </div>
        <div v-if="state.notes.length" class="wrapper">
            <div class="search">
                <label for="search">Поиск</label>
                <input type="text" name="search" @keydown.enter="searchNote" class="search_input">
            </div>
            <div v-for="note in state.notes" :key="note.id" class="main-view_all">
                <div class="card">
                    <h3 class="title in_card">{{ note.title }}</h3>
                    <p class="title in_card body">{{ note.body }}</p>
                    <div class="buttons_in_card">
                        <button class="button read">Прочитать</button>
                        <button class="button delete">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="title no-notes">Заметок нет</p>
        </div>
    </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore()
const state = store.state

const searchNote = () => {
    const param = document.querySelector('.search_input').value
    if(param.trim()) {
        state.notes = state.notes.filter(n => n.title.trim().includes(param.trim()))
    }
}
</script>
