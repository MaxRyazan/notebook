<template>
   <div>
       <div>{{note.name}}</div>
       <div>{{note.description}}</div>
   </div>
</template>

<script setup>
import store from "@/store";
import { useRoute } from 'vue-router';
const route = useRoute();

const note = store.state.notes.find(n => n.id === route.params.id)

</script>