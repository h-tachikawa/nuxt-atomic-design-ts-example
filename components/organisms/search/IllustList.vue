<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-if="$vuetify.breakpoint.lgAndUp"
        v-for="illust in illustList"
        :key="illust.title"
        xs6
        mb-4
        mt-4
      >
        <v-layout
          row
          justify-center
          align-center
        >
          <IllustCard
            :title="illust.title"
            :thumbnail="illust.thumbnailUrl"
            height="30vh"
            width="50vh"
          />
        </v-layout>
      </v-flex>
      <v-flex
        v-else
        v-for="illust in illustList"
        :key="illust.title"
        xs12
        mb-4
        mt-4
      >
        <v-layout
          row
          justify-center
          align-center
        >
          <IllustCard
            :title="illust.title"
            :thumbnail="illust.thumbnailUrl"
            height="30vh"
            width="70vw"
          />
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import IllustCard from '~/components/molecules/card/IllustCard'
export default {
  components: {
    IllustCard
  },
  props: {
    illustList: {
      type: Array,
      required: true
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
