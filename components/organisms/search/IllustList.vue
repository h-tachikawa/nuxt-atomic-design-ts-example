<template>
  <div>
    <v-layout
      row
      wrap
    >
      <template v-if="$vuetify.breakpoint.lgAndUp">
        <v-flex
          v-for="(illust, index) in illustList"
          :key="index"
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
          v-for="(illust, index) in illustList"
          :key="index"
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

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import IllustCard from '~/components/molecules/card/IllustCard'
import { Illust } from '~/store/illust';

@Component({
  components: {
    IllustCard
  }
})
export default class IllustList extends Vue {
  @Prop({
    required: true
  })
  illustList: Illust[]

  public clickHandler (illust) {
    console.log(illust)
  }
}
</script>

<style scoped>
</style>
