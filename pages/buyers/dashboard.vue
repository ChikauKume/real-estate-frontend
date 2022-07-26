<template>
    <div>
        <div class="container">
            <v-card>
                <v-toolbar
                flat
                prominent
                >
                    <v-card-title class="text-center w-full justify-center">
                        <h1 class="font-weight-bold text-h2 basil--text">
                            物件管理
                        </h1>
                    </v-card-title>
                    <template v-slot:extension>
                        <v-tabs
                        v-model="tabs"
                        color="basil"
                        centered
                        grow
                        >
                        <v-tab
                            v-for="(item, i) in items"
                            :key="i"
                        >
                            {{ item }}
                        </v-tab>
                        </v-tabs>
                    </template>
                </v-toolbar>

                <v-tabs-items v-model="tabs">
                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                        <Favorite :realEstatesData = realEstatesData :baseImageUrl = baseImageUrl />
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                    <v-card-title class="text-h5">
                        An awesome title
                    </v-card-title>
                    <v-card-text>
                        <p>
                        Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
                        </p>

                        <p>
                        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
                        </p>

                        <p class="mb-0">
                        Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                    <v-card-title class="text-h5">
                        An even better title
                    </v-card-title>
                    <v-card-text>
                        <p>
                        Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
                        </p>

                        <p class="mb-0">
                        Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
            </v-card>
        </div>
    </div>
</template>

<script>
import Favorite from '@/components/Favorite'

export default {
  component:{
    Favorite
  },
  data () {
    return {
        realEstatesData: [],
        baseImageUrl : 'https://gna-real-estate.s3.ap-northeast-1.amazonaws.com/realestates/',
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        items: ['お気に入り物件', '購入履歴', '入札履歴']
    }
  },
  methods: {
    async getRealStateData(){
      try {
        const res = await this.$axios.$get('/real-estates/type/1')
        this.realEstatesData = res.data
      }
      catch(err){
        console.log('error',err)
      }
    }
  },
  mounted() {
    this.getRealStateData();
  },
}
</script>
