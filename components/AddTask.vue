<template>
    <div class="dialog">
        <div class="dialog__content">
            <div class="dialog__head">
                <h2>Add new task</h2>
                <button @click="onClickCancel">
                    <img src="../assets/icons/cancel.png" width="25"/>
                </button>
            </div>
            <div class="dialog__body">
                <label for="title">Task Title</label>
                <input type="text" id="title"/>
                <label for="description">Description</label>
                <input type="text" id="description"/>
                <label for="date">Expiry Date</label>
                <input type="date" id="date"/>
                <div class="form__action">
                    <button class="btn" @click="submitForm">Submit</button>
                </div>
                <div>
                    <ul id="addTodo"> 
                        <li><div id='result'></div></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const emit= defineEmits(['close'])

function onClickCancel() {
    emit("close",true);
}

const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('date');

const result = document.getElementById('result');

function submitForm() {
    if(title?.value==false){     
        alert('内容を全て入力してください');
    }else{
        const list = document.createElement("li");
        list.innerHTML = title?.value;
        result?.appendChild(list);
    }
}
</script>