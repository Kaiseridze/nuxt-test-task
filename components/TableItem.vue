<template>
  <tr>
    <td>{{ id }}</td>
    <NuxtLink :to="`${id}`">
      <td>{{ name }}</td>
    </NuxtLink>
    <td>{{ email }}</td>
  </tr>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
}
</script>
<style>
a {
  color: inherit;
  text-decoration: none;
}
td {
  padding: 10px;
}
</style>