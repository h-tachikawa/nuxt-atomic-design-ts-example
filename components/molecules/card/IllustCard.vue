<template>
  <div>
    <v-card
      :height="height"
      :width="width"
      @click="$emit('click')"
    >
      <v-img
        :src="thumbnail"
        height="100%"
        width="100%"
      />
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'タイトルなし'
    },
    thumbnail: {
      type: String,
      required: true
    },
    height: {
      type: String
    },
    width: {
      type: String
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
