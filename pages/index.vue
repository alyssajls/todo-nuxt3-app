<template>
    <div class="todo__wrapper">
        <div class="todo_task-list">
            <div class="todo_add">
                <button class="btn" @click="toggleDialog">Add new task</button>
            </div>
            <!-- index.vue の Active Tasks には未完了のタスクのみを、 Completed Tasks には完了済のタスクのみを表示する -->
            <!-- 現在は、 Active Tasks にすべてのタスクを表示しているので、これを「未完了のタスク」のみを表示するように実装を追加する -->
            <div class="active__task">
                <h3>Active Task</h3>
                <!-- itemではなく、taskcardinputを使って値だけを渡した -->
                <!-- <div v-for="(item,index) in [1,2]" :key="index">
                    <task-card
                    :taskcard="taskcardinput"/>
                </div> -->
                <div v-for="(item,index) in active" :key="index">
                    <!-- 既存submitボタンまでやったときは、以下 -->
                    <!-- <task-card
                    :taskcard="item"
                    /> -->
                    <!-- <task-card :taskcard="item" @on-complete="(task: Taskcard) => task.isCompleted = true"></task-card> -->
                    <task-card :taskcard="item" @on-complete="() => item.isCompleted = true"></task-card>
                </div>
            </div>
            
            <div class="complete__task">
                <h3>Completed Task</h3>
                <!-- <div v-for="(item,index) in [1,2]" :key="index">
                    <task-card
                    :taskcard="taskcardinput"/>
                </div> -->
                <div v-for="(item,index) in completed" :key="index">
                    <!-- <task-card
                    :taskcard="item"
                    /> -->
                    <!-- <task-card :taskcard="item" @on-complete="(task: Taskcard) => task.isCompleted = false"></task-card> -->
                    <task-card :taskcard="item" @on-complete="() => item.isCompleted = false"></task-card>
                </div>
            </div>
        </div>
        <!-- 以下、後ろに　v-model:taskcard="taskcardinput"　を使って値だけを渡した -->
        <!-- <add-task v-if="showDialog" @close="toggleDialog" v-model:taskcard="taskcardinput"></add-task> -->
        <add-task v-if="showDialog" @close="toggleDialog" @on-submit="onSubmit"></add-task>
    </div>
</template>

<script setup lang="ts">
import { Taskcard } from '../utils/task'
import { ref } from "vue";

const showDialog= ref(false);

function toggleDialog() {
    showDialog.value= !showDialog.value;
}

// reactiveな配列 → 「ref('文字が書いていると')」:　変動不可能な固定値(以下、例)
// const taskcardinput = ref(['こちらはtitleです。','こちらはdescriptionです。','こちらはdateです。']);
// const taskcardinput = ref(['']);

const showTodos = ref<Taskcard[]>([]);

// 子からemit
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

    ③Nuxt 3: https://nuxt.com/docs
    -----------------------
    ②Vue 3: https://vuejs.org/guide/introduction.html
    -----------------------
    ①HTML + CSS + JavaScript（TS）
    */
}


// Todo
// 「完了済タスク」、「未完了のタスク」を表す computed プロパティを作成する
// 配列から特定の条件を抽出するには、 Array の filter() メソッドを利用するとよい


// 1
// const status = computed(() => {
//     const taskcard = new Taskcard()
//     if(taskcard.isCompleted === true){
//         return ("on-active")
//     }else{
//         return ("on-complete")
//     }
// }) 


// 2
/*
＜三輪さんのコメント＞
computed の使い方も違っていると思います (computed に渡すのは関数、というところまでは良いのですが、 
computed 自体はメソッドというよりも変数に近いと考えていただいた方がよさそうです。

各のreturnの後ろに（onComplete、onActive）メソッドを定義して、その中で filter を使っていただいていますが、
どちらかといえば computed() に渡す関数の中で filter() を使うイメージです
*/
const completed = computed(() => showTodos.value.filter((task: Taskcard) => task.isCompleted === true))
const active = computed(() => showTodos.value.filter((task: Taskcard) => task.isCompleted === false))

</script>