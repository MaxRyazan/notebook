<template>
    <div class="main-view_container">
        <div class="main-view_create">
            <h2 class="title">Блокнот для заметок</h2>
            <div class="create_container">
                <input v-model="state.name" type="text" class="create_input" autofocus placeholder="Введите название заметки">
                <textarea v-model="state.description" cols="30" rows="10" class="create_input textarea" placeholder="Введите текст заметки"></textarea>
            </div>
            <button class="button in_create" @click="actions.createNote(state.name, state.description)">Добавить заметку</button>
        </div>
        <div v-if="state.notes.length" class="wrapper">
            <div class="search">
                <label for="search">Поиск</label>
                <input type="text" @keydown.enter="sync_methods.searchNote($event)" class="search_input">
            </div>
            <div v-for="note in state.notes" :key="note.id" class="main-view_all">
                <div class="card">
                    <h3 class="title in_card">{{ note.name }}</h3>
                    <p class="title in_card body">{{ note.description }}</p>
                    <div class="buttons_in_card">
                        <button class="button read" @click="$router.push(`/${note.id}`)">Прочитать</button>
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
import {onMounted} from "vue";
import actions from "@/js_classes/actions";
import sync_methods from "@/js_classes/sync_methods";

const state = useStore().state


onMounted(() => {
    actions.getNotes()
})
</script>
