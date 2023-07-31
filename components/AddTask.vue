<template>
    <div class="dialog">
        <div class="dialog__content">
            <div class="dialog__head">
                <h2>Add new task</h2>
                <button @click="onClickCancel">
                    <img src="../assets/icons/cancel.png" width="25"/>
                </button>
            </div>
            <div class="dialog__body" id="add-task">
                <label for="title">Task Title</label>
                <input type="text" id="title" v-model="title"/>

                <label for="description">Description</label>
                <input type="text" id="description" v-model="description"/>

                <label for="date">Expiry Date</label>
                <input type="date" id="date" v-model="date"/>

                <div class="form__action">
                    <button class="btn" @click="submitForm">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
// 'update:変数名':emitの機能の一つ
const emit= defineEmits(['close','update:taskcards','on-submit'])

function onClickCancel() {
    emit("close",true);
}

// reactiveな文字列 → 「ref('')」 :　固定値ではなく、変動可能な文字列
const title = ref('');
const description = ref('');
const date = ref('');

// 子から親にemitする
function submitForm() {
    // 以下は、title,description,dateが配列なので[]の中に入れて横に書く（各の値だけをupdateするとき）
    // emit("update:taskcards",[title,description,date]);
    emit('on-submit',[title.value,description.value,date.value])
    emit("close",true);
}
</script>