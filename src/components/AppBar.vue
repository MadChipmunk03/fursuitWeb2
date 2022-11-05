<template>
  <v-container :class="{ 'py-0': isHomePage }">
    <!-- DESKTOP = tabs; MOBILE = drawer -->
    <v-app-bar light :color="appBarColor" elevation="15" height="100" class="pb-0 mb-0" app>
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer" :color="navIconColor"></v-app-bar-nav-icon>
      <v-spacer />
      <v-img
        @click="routeTo('home')"
        src="@/assets/BambihoFanClub.png"
        alt="Bambi logo"
        max-height="80"
        max-width="80"
        class="mr-5"
      ></v-img>
      <v-app-bar-title
        v-if="$vuetify.breakpoint.name !== 'xs'"
        class="text-h3 text-bold white--text"
      >
        Made by <span class="bambi--text">BAMBI</span>
      </v-app-bar-title>
      <v-spacer />

      <template v-if="!isMobile" v-slot:extension>
        <v-tabs centered>
          <v-tab
            v-for="(tab, ix) in tabs"
            :key="ix"
            @click="routeTo(tab.view)"
            :style="tabClass"
            :active-class="isHomePage ? '' : 'active-tab'"
          >
            {{ tab.text }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list nav>
        <v-list-item-group>
          <router-link v-for="(tab, ix) in tabs" :key="ix" :to="{ name: tab.view }">
            <v-list-item>
              <v-list-item-title>{{ tab.text }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppBar',
  data() {
    return {
      drawer: false,
      tabs: [
        { text: 'Home', view: 'home' },
        { text: 'Merch', view: 'merch' },
        { text: 'Commision', view: 'commision' },
        { text: 'Social media', view: 'socialMedia' },
      ],
    };
  },
  methods: {
    routeTo(routeName: string) {
      this.$router.push({ name: routeName });
    },
  },
  computed: {
    isMobile() {
      const size = this.$vuetify.breakpoint.name;
      return ['xs', 'sm'].includes(size);
    },
    isHomePage() {
      return this.$route.name === 'home';
    },
    appBarColor() {
      if (this.isHomePage) return 'rgba(0, 0, 0, 0.5)';
      else return 'primary';
    },
    bambiHeader() {
      return {};
    },
    tabClass() {
      if (this.isHomePage) {
        return {
          color: 'white',
        };
      }
      return {};
    },
    navIconColor() {
      if (this.isHomePage) return 'white';
      return '';
    },
  },
});
</script>

<style scope lang="scss">
.bambi--text {
  color: var(--v-primaryInvert-base);
}

.active-tab {
  color: rgba(0, 0, 0, 0.87) !important;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
