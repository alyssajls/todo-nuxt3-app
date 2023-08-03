<template>
    <div class="todo__wrapper">
        <div class="todo_task-list">
            <div class="todo_add">
                <button class="btn" @click="toggleDialog">Add new task</button>
            </div>
            <div class="active__task">
                <h3>Active Task</h3>
                <!-- itemではなく、taskcardinputを使って値だけを渡した -->
                <!-- <div v-for="(item,index) in [1,2]" :key="index">
                    <task-card
                    :taskcards="taskcardinput"/>
                </div> -->
                <div v-for="(item,index) in showTodos" :key="index">
                    <task-card
                    :taskcard="item"/>
                </div>
            </div>
            
            <div class="complete__task">
                <h3>Comleted Task</h3>
                <!-- <div v-for="(item,index) in [1,2]" :key="index">
                    <task-card
                    :taskcards="taskcardinput"/>
                </div> -->
                <div v-for="(item,index) in []" :key="index">
                    <task-card
                    :taskcard="item"/>
                </div>
            </div>
        </div>
        <!-- 以下、後ろに　v-model:taskcards="taskcardinput"　を使って値だけを渡した -->
        <!-- <add-task v-if="showDialog" @close="toggleDialog" v-model:taskcards="taskcardinput"></add-task> -->
        <add-task v-if="showDialog" @close="toggleDialog" @on-submit="onSubmit"></add-task>
    </div>
</template>

<script setup lang="ts">
import { Taskcard } from '../utils/task'
import {ref} from "vue";

const showDialog= ref(false);

function toggleDialog() {
    showDialog.value= !showDialog.value;
}

// reactiveな配列 → 「ref('文字が書いていると')」:　変動不可能な固定値(以下、例)
// const taskcardinput = ref(['こちらはtitleです。','こちらはdescriptionです。','こちらはdateです。']);
const taskcardinput = ref(['']);

const showTodos = ref<Taskcard[]>([]);

const onSubmit = (event: Taskcard) => {
    showTodos.value.push(event)

    // utilsのclass化する前は、以下のようだった
    // const showTodos = ref<string[][]>([]);  　→ 　[][]である理由は、以下
    // event = ['title', 'description', 'date']
    // showTodos.value = [ ['title', 'description', 'date'], ['title', 'description', 'date'], ['title', 'description', 'date'] ]

    /*
    ＜三輪さんからの説明＞

    <my-component my-prop="myValue" @on-submit="myValue = $event" />
    emit('on-submit', 'New Value')

    <my-component v-model:my-prop="myValue" />
    emit('update:my-prop', 'New Value')

    Nuxt 3: https://nuxt.com/docs
    -----------------------
    Vue 3: https://vuejs.org/guide/introduction.html
    -----------------------
    HTML + CSS + JavaScript
    */
}
</script>