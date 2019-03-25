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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class IllustCard extends Vue {
  @Prop({
    required: true,
    default: 'タイトルなし'
  })
  title: string = ''

  @Prop({
    required: true
  })
  thumbnail: string = ''

  @Prop() height: string = ''

  @Prop() width: string = ''
}
</script>

<style scoped>
</style>
