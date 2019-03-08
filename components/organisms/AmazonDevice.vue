<template>
  <div>
    <AmazonUrlInputExtractAsin
      v-model="inputUrl"
      :disabled="fetchingDevice || sendingForm"
      @extractedAsin="(asin) => fetchDeviceByAsin(asin)"
      @resetInputUrl="inputUrl = ''"
      hint="URLから簡単にデバイスを取得できます"
    />

    <template v-if="fetchingDevice">
      <div class="text-xs-center mt-3">
        <v-progress-circular
          :size="50"
          indeterminate
          color="primary"
        />
        <div class="title mt-3">
          URLから取得しています…
        </div>
      </div>
    </template>

    <p>{{ fetchedData.device.title }}</p>
  </div>
</template>

<script>
import FormHandleable from '~/mixins/form/form-handleable'
import AmazonUrlInputExtractAsin from '~/components/molecules/AmazonUrlInputExtractAsin'

export default {
  components: { AmazonUrlInputExtractAsin },

  data() {
    return {
      inputUrl: '',
      lastSearchedAsin: '',
      fetchingDevice: false,
      fetchedData: null
    }
  },

  computed: {},

  methods: {
    async fetchDeviceByAsin(asin) {
      if (this.fetchingDevice || !asin || this.lastSearchedAsin === asin) {
        return
      }

      this.fetchingDevice = true

      await this.$axios.$get('/my-searchIllust-api', { params: { asin } })
        .then((data) => {
          this.fetchedData = data
          this.lastSearchedAsin = asin
        })
        .finally(() => {
          this.fetchingDevice = false
        })
    },

    sentRequest() {
      this.fetchedData = null
      this.inputUrl = ''
      this.lastSearchedAsin = ''
    }
  }
}
</script>
