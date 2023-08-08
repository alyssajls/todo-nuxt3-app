<script lang="ts" setup>
import { Taskcard } from '~/utils/task'

// Props & Emit
const props = defineProps<{
  // taskcards: string[]
  taskcard: Taskcard
}>()

const emit= defineEmits(['on-complete'])

// Todo
// 「完了済タスク」、「未完了のタスク」を表す computed プロパティを作成する
function completeForm() {

  // classじゃなくて変数を…「Taskcard」は（X）NO
  // emit('on-complete', Taskcard);　　　　　→ NO
  // emit('on-complete', props.taskcard);   → YES
  emit('on-complete');
}

</script>

<template>
  <div class="task__card mt-5">
    <div class="task__card__head pt-5 pb-2">
      <div class="task__card__action text-light info-text">
        <span>Edit</span>
        <span>Delete</span>
        <span @click="completeForm">{{ taskcard.isCompleted ? 'Back to Active' : 'Complete' }}</span>
      </div>
      <!-- {{props.taskcards[0]}} -->
      <p class="task_card_title">{{ props.taskcard.title }}</p>
      <!-- {{props.taskcards[2]}} -->
      <p class="text-light info-text">Created on: {{ props.taskcard.date }}</p>
    </div>
    <div class="task__card__footer">
      <!-- {{props.taskcards[1]}} -->
        <p class="mt-1 text-light">{{ props.taskcard.description }}</p>
        <div class="task__card__meta text-light info-text">
            <p>Expiring on: 23rd Dec 2023</p>
            <img src="https://www.w3schools.com/howto/img_avatar.png" class="avatar">
        </div>
    </div>
  </div>
</template>
