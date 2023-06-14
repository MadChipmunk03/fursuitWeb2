<template>
  <div class="py-8">
    <h1 class="text-center">{{ $t('home.comissionsAre.title') }}</h1>
    <v-container v-if="commisionsAreOpen" class="pa-0">
      <h2 class="text-center open mb-2">{{ $t('home.comissionsAre.open') }}</h2>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEGidq0iLH3ZOzKZRYRTuE-kn3ewTFQVVoVju5mcZfRqNCyQ/viewform" target="_blank">
        <v-btn>
          {{ $t('home.comissionsAre.goToForm') }}
        </v-btn>
      </a>
    </v-container>
    
    <v-container v-else class="pa-0">
      <h2 class="text-center close ">{{ $t('home.comissionsAre.close') }}</h2>
      <v-card-subtitle class="pt-0 secondary--text">
        <a :class="textTheme" class="text-decoration-underline" @click="routeTo('terms-of-service')">{{ $t('tos.title') }}</a>  
      </v-card-subtitle>

      <!-- Dialog -->
      <div v-if="!emailIsSet" class="text-center">
        <v-dialog
          v-model="dialog"
          width="auto"
        >
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" @click="dialog = true" >
              <v-card-subtitle color="secondary">{{ $t('home.comissionsAre.dialogOpenBtn') }}</v-card-subtitle>
            </v-btn>
          </template>

          <v-card class="px-2 py-4" :disabled="sendingSubscription" width="400">
            <BForm :handleSubmit="register">
              <v-card-title>{{ $t('home.comissionsAre.dialogTitle') }}</v-card-title>
              <v-card-text>
                {{ $t('home.comissionsAre.dialogText') }}
              </v-card-text>

              <ValidationProvider  rules="required|email" v-slot="{ errors }">
                <v-text-field class="px-4" label="Email" v-model="subscriptionMail" :error-messages="errors" />
                <span class="px-4 text-caption error--text">{{ errors[0] }}</span>
              </ValidationProvider>

              <v-card-actions>
                <v-spacer />
                <v-btn @click="dialog = false">{{ $t('general.cancel') }}</v-btn>
                <v-btn color="primary" type="submit" :loading="sendingSubscription">
                  <v-icon right v-if="subscriptionSend" > mdi-check </v-icon> {{ $t('general.subscribe') }}
                </v-btn>
              </v-card-actions>
            </BForm>
          </v-card>
        </v-dialog>
      </div>
      <v-card-subtitle v-else class="py-0 secondary--text">Notifikace vám bude zaslána na: <br /> {{ getEmail }} </v-card-subtitle>
    </v-container>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import BForm from '@/components/Generic/BForm.vue'
import { ValidationProvider } from 'vee-validate';

export default Vue.extend({
  name: 'CommisionsAre',
  components: { BForm, ValidationProvider },
  data() {
    return {
      refreshKey: 0,
      commisionsAreOpen: false,
      dialog: false,
      sendingSubscription: false,
      subscriptionSend: false,
      subscriptionMail: localStorage.getItem('email') || ''
    };
  },
  computed: {
    emailIsSet() {
      this.refreshKey;
      return localStorage.getItem('email') != null
    },
    getEmail() {
      this.refreshKey;
      return localStorage.getItem('email')
    },
    textTheme(): string {
      return this.$vuetify.theme.dark ? 'white--text' : 'black--text'
    },
  },
  methods: {
    register() {
      this.sendingSubscription = true;
      axios.get(`https://madebybambi.com/api/addSubscriber?email=${this.subscriptionMail}`)
           .then(async res => { 
              localStorage.setItem('email', this.subscriptionMail);
              this.refreshKey++;
              this.sendingSubscription = false;
              await new Promise(resolve => setTimeout(() => { this.subscriptionSend = true; resolve('') }, 1000))
              this.dialog = false})
           .catch(err => console.log(err))
    },
    routeTo(routeName: string) {
      this.$router.push({ name: routeName });
    },
  },
  created() {
    axios
      .get('config.json')
      .then(res => this.commisionsAreOpen = res.data.commisionsAreOpen)
      .catch(err => console.log(err));
  },
});
</script>

<style scope lang="scss">
.close {
  color: var(--v-error-base);
}

.open {
  color: var(--v-success-base);
}
</style>
