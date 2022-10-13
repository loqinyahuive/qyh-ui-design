<script lang="ts">
export default {
  name: "CTitle",
};
</script>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>

    <div class="title" v-if="title"><span class="ml-10">{{title}}</span></div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  padding-left: 8px;

  &:before {
    content: '';
    border-left: 3px solid #4CBAA2;
    display: inline-block;
    height: 16px;
    position: absolute;
    margin-top: 3px;
    margin-right: 8px;
  }
}

.ml-10 {
  margin-left: 10px;
}
</style>
