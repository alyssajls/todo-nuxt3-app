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
const emit= defineEmits(['close','update:taskcard','on-submit'])

function onClickCancel() {
    emit("close",true);
}

// reactiveな文字列 → 「ref('')」 :　固定値ではなく、変動可能な文字列
const title = ref('');
const description = ref('');
const date = ref('');

// 子から親にemitする
function submitForm() {

    //　方法（１）：以下、インスタンスと同じもの！！こっちもできる（インスタンス化しない方法）
    // const taskcard = { 
    //     title: title.value, 
    //     description: description.value, 
    //     date: date.value
    // };

    //　方法(２)：インスタンス化する
    const taskcard = new Taskcard()

    taskcard.title = title.value
    taskcard.description = description.value
    taskcard.date = date.value

    // utilsのclassを作って、配列のことを以下のように変数「taskcard」でまとめて表示が可能
    emit('on-submit', taskcard);

    // こちらは「X」のcloseボタン
    emit("close",true);

    // Memo
    // 以下は、title,description,dateが配列なので[]の中に入れて"update:taskcard"の横に書く（各の値だけをupdateするとき）
    // emit("update:taskcard",[title,description,date]);
    // utilsのclassを作る前は、以下のemitで表示してた
    // emit('on-submit',[title.value,description.value,date.value])
}
</script>