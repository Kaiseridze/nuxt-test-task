<template>
  <div>
    <LoaderVue v-if="getLoadingStatus" />
    <table v-else>
      <tr>
        <th @click="sortById">
          ID
          <img
            src="https://img.icons8.com/material-rounded/20/000000/sort.png"
          />
        </th>
        <th>Name</th>
        <th>E-mail</th>
      </tr>
      <TableItem
        v-for="comments in commentSlice"
        :id="comments.id"
        :key="comments.id"
        :name="comments.name"
        :email="comments.email"
      />
    </table>
    <PaginationVue
      :pageNums="pageNums"
      :defaultPage="defaultPage"
      :selectPage="selectPage"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import pagination from '../utils/pagination'

import TableItem from './TableItem.vue'
import LoaderVue from './LoaderVue.vue'
import PaginationVue from './PaginationVue.vue'
export default {
  components: { TableItem, LoaderVue, PaginationVue },
  data() {
    return {
      usersPerPage: 10,
      defaultPage: 1,
    }
  },
  computed: {
    ...mapGetters(['getComments', 'getLoadingStatus']),
    pageNums() {
      return pagination(
        this.defaultPage,
        this.getComments.length / this.usersPerPage
      )
    },
    commentSlice() {
      const from = (this.defaultPage - 1) * this.usersPerPage
      const to = from + this.usersPerPage
      return this.getComments.slice(from, to)
    },
  },
  beforeMount() {
    this.fetchComments()
  },
  methods: {
    ...mapActions(['fetchComments', 'sortById']),
    selectPage(page) {
      if (page !== '...') {
        this.defaultPage = page
      }
    },
  },
}
</script>

<style>
table {
  font-family: sans-serif;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  border-collapse: separate;
  border-spacing: 5px;
}

th {
  padding: 10px;
  user-select: none;
}

th:first-child {
  display: flex;
  align-items: center;
  cursor: pointer;
}

img {
  margin-left: 5px;
}
</style>