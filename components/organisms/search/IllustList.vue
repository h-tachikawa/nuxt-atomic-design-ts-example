<template>
  <div>
    <v-layout
      row
      wrap
    >
      <template v-if="$vuetify.breakpoint.lgAndUp">
        <v-flex
          v-for="illust in illustList"
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
              @click="clickHandler(click)"
              height="30vh"
              width="50vh"
            />
          </v-layout>
        </v-flex>
      </template>
      <template v-else>
        <v-flex
          v-for="illust in illustList"
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
              @click="clickHandler(illust)"
              height="30vh"
              width="70vw"
            />
          </v-layout>
        </v-flex>
      </template>
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
    clickHandler (illust) {
      console.log('clicked')
      console.log(illust)
    }
  }
}
</script>

<style scoped>
</style>
