<template>
  <CommentBlock :id="`${id}`" />
</template>

<script>
export default {
  name: 'CommentPage',
  computed: {
    id() {
      return this.$route.params.CommentPage
    },
  },
}
</script>

<style></style>