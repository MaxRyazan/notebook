<template>
    <div class="center_container">
        <div class="rout_link">
            <router-link to="/" class="rout_link href">Главная /</router-link> Заметка № {{ route.params.id }}
        </div>
        <div class="card">
            <h3 class="title in_card">{{ note.name }}</h3>
            <p class="title in_card">{{ note.description }}</p>
        </div>
    </div>
</template>

<script setup>
import store from "@/store";
import { useRoute } from 'vue-router';
const route = useRoute();

const note = store.state.notes.find(n => n.id === route.params.id)

if(!note) window.location.href = '/'
</script>