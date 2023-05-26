<template>
  <v-container :class="{ 'py-0': isHomePage }">
    <!-- DESKTOP = tabs; MOBILE = drawer -->
    <v-app-bar light :color="appBarColor" elevation="15" height="100" class="pb-0 mb-0" app>
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer" :color="navIconColor"></v-app-bar-nav-icon>
      <v-img
        class="float-center mx-auto"
        @click="routeTo('home')"
        src="@/assets/MainLogoBambi.png"
        alt="Bambi logo"
        :max-height="logoDimensions.height"
        :max-width="logoDimensions.width"
      ></v-img>
      <UserSettings v-if="!isMobile" class="usrSettings" />

      <template v-if="!isMobile" v-slot:extension>
        <v-tabs centered v-model="tabsModel">
          <v-tab
            v-for="(tab, ix) in tabs"
            :key="ix"
            :href="`#${tab.view}`"
            @click="routeTo(tab.view)"
            :style="tabClass"
            :active-class="isHomePage || isDarkTheme ? 'active-tab1' : 'active-tab2'"
          >
            {{ tab.text }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app>
      <h2 class="pa-4">{{ $t('appBar.nav') }}</h2>
      <v-divider />
      <v-list nav>
        <v-list-item-group v-model="tabsModel">
          <router-link v-for="(tab, ix) in tabs" :key="ix" :to="{ name: tab.view }">
            <v-list-item>
              <v-list-item-title>{{ tab.text }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <v-divider />
        <UserSettings class="pt-4 mb-16" />
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import UserSettings from '../Generic/UserSettings.vue';

export default Vue.extend({
  name: 'AppBar',
  components: { UserSettings },
  data() {
    return {
      drawer: false,
      tabsModel: this.$route.name,
      tabs: [
        { text: this.$t('appBar.tabs[0]'), view: 'home' },
        { text: this.$t('appBar.tabs[1]'), view: 'merch' },
        { text: this.$t('appBar.tabs[2]'), view: 'calculator' },
        { text: this.$t('appBar.tabs[3]'), view: 'comissions' },
        { text: this.$t('appBar.tabs[4]'), view: 'about-us' },
      ],
    };
  },
  methods: {
    routeTo(routeName: string) {
      this.$router.push({ name: routeName });
    },
  },
  watch: {
    '$route.name': function (newVal) {
      this.tabsModel = newVal;
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
    isDarkTheme() {
      return this.$vuetify.theme.dark;
    },
    appBarColor() {
      if (this.isHomePage) return 'rgba(0, 0, 0, 0.5)';
      else return 'primary';
    },
    tabClass() {
      if (this.isHomePage || this.isDarkTheme) {
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
    logoDimensions() {
      if (['xl', 'lg'].includes(this.$vuetify.breakpoint.name)) return { width: 400, height: 80 };
      return { width: 250, height: 70 };
    },
  },
  created() {
    console.log(this.$route);
  },
});
</script>

<style scope lang="scss">
.active-tab1 {
  background-color: rgba(0, 0, 0, 0.1);
}
.active-tab2 {
  color: rgba(0, 0, 0, 0.87) !important;
  background-color: rgba(0, 0, 0, 0.1);
}
.usrSettings {
  z-index: 1000;
  position: absolute;
  right: 0;
}
</style>
