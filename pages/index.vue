<template>
    <div class="todo__wrapper">
        <!-- <h2>Manage all your tasks at a single place</h2> -->
        <div class="todo_task-list">
            <div class="todo_add">
                <button class="btn" @click="toggleDialog">Add new task</button>
            </div>
            <div class="active__task">
                <h3>Active Task</h3>
                <!-- the active task list -->
                <div v-for="(item,index) in [1,2,3,4]" :key="index">
                    <task-card/>
                </div>
            </div>
            <!-- 画面に表示試し -->
            <!-- <div class="tasks">{{ store.status }}</div> -->

            <div class="complete__task">
                <h3>Comleted Task</h3>
                <!-- the Comleted task list -->
                <div v-for="(item,index) in [1,2,3,4]" :key="index">
                    <task-card/>
                </div>
            </div>
        </div>
        <add-task v-if="showDialog" @close="toggleDialog"></add-task>
    </div>
</template>
<style scoped>

</style>
<script setup lang="ts">
import {ref} from "vue";
import { status, addTasks } from '../store/todoTask'

const showDialog= ref(false);

// You can reuse this function anytime
function toggleDialog() {
    showDialog.value= !showDialog.value;
}

</script>