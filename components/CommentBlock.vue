<template>
  <div class="comment">
    <LoaderVue v-if="isLoading" />
    <div v-else class="comment_post">
      <NuxtLink to="/"
        >Home
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA70lEQVRIie3TIU4DQRTG8d8SWkOCaQIaAa6GngAUXIFLkGCwXIE7cAYUWBD0AghQkCAhYCpgMa/pNIHObLsIAl/yzMz3/d/Ozhv+mo6iWleFE9RRp1hqC97FWYBHUXWsdReFr+A8gK/Yww6eY+0Sq/PCe7gO0BO2k70+HmJviPWm8A3cBuAOmxnPPbZK4X08RvAGazO8PVyZnHKQg+/iJQIXyv5vek9v2P/OeGAyITU6BfCxOkluFKwpHeI9MdUN4GOl2Q8c54zzNpjScoPwV6pywdaee1sNKgVfvUiDxvr9DWZNUcmoZj0/foJ/ZfUJhiY9hM3Q0ugAAAAASUVORK5CYII="
      /></NuxtLink>
      <h1>{{ comment.name }}</h1>
      <p>{{ comment.body }}</p>
      <span>
        <strong>User: </strong>
        {{ comment.email }}
      </span>
      <span>
        <strong>User ID: </strong>
        {{ comment.id }}
      </span>
      <span>
        <strong> Post ID </strong>
        {{ comment.postId }}
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LoaderVue from './LoaderVue.vue'
export default {
  name: 'CommentBlock',
  components: { LoaderVue },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      comment: {},
      isLoading: true,
    }
  },
  async fetch() {
    await axios
      .get(`https://jsonplaceholder.typicode.com/comments/${this.id}`)
      .then(({ data }) => {
        this.comment = data
        this.isLoading = false
      })
  },
}
</script>

<style>
a {
  display: flex;
  align-items: flex-end;
}
.comment {
  font-family: sans-serif;
  max-width: 500px;
  margin: auto;
}

.comment_post {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>