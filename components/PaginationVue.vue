<template>
  <div class="pagination">
    <div
      v-for="(page, index) in pageNums"
      :key="`${page}__${index}`"
      :class="{ 'pagination_item--selected': page === defaultPage }"
      class="pagination_item"
      @click="selectPage(page)"
    >
      {{ page }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaginationVue',
  props: {
    pageNums: {
      type: Array,
      default: () => {
        return []
      },
      required: true,
    },
    selectPage: {
      type: Function,
      required: true,
    },
    defaultPage: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style>
.pagination {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px auto;
}

.pagination_item {
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #e7e7e7;
  transition: 0.15s ease-in;
  margin-bottom: 15px;
  user-select: none;
}

.pagination_item:hover {
  background-color: #e7e7e7;
  cursor: pointer;
}
.pagination_item--selected {
  background-color: #e7e7e7;
}
</style>