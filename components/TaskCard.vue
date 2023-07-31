<script lang="ts" setup>

// Props & Emit
const props = defineProps<{
  taskcards: string[]
}>()

</script>

<template>
  <div class="task__card mt-5">
    <div class="task__card__head pt-5 pb-2">
      <div class="task__card__action text-light info-text">
        <span>Edit</span>
        <span>Delete</span>
        <span>Complete</span>
      </div>
      <p class="task_card_title">{{props.taskcards[0]}}</p>
      <p class="text-light info-text">Created on: {{props.taskcards[2]}}</p>
    </div>
    <div class="task__card__footer">
        <p class="mt-1 text-light">{{props.taskcards[1]}}</p>
        <div class="task__card__meta text-light info-text">
            <p>Expiring on: 23rd Dec 2023</p>
            <img src="https://www.w3schools.com/howto/img_avatar.png" class="avatar">
        </div>
    </div>
  </div>
</template>
