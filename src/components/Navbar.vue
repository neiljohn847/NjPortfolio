<template>
  <div>
    <v-app-bar app color="white" class="px-4 px-md-12">
      <v-img  src="@/assets/njlogo.png"  alt="Portfolio Logo"  class="rounded-lg" max-width="100" max-height="100" contain/>

      <v-spacer></v-spacer>
      <div class="d-none d-md-flex">
        <v-btn text @click="scroll('home')">Home</v-btn>
        <v-btn text @click="scroll('about')">About</v-btn>
        <v-btn text @click="scroll('skills')">Skills</v-btn>
        <v-btn text @click="scroll('projects')">Projects</v-btn>
        <v-btn text @click="scroll('contact')">Contact</v-btn>
      </div>
      <v-app-bar-nav-icon  @click="drawer = true"  class="d-md-none" ></v-app-bar-nav-icon>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary right app class="d-md-none">
      <v-list dense>
        <v-list-item @click="navigate('home')">Home</v-list-item>
        <v-list-item @click="navigate('about')">About</v-list-item>
        <v-list-item @click="navigate('skills')">Skills</v-list-item>
        <v-list-item @click="navigate('projects')">Projects</v-list-item>
        <v-list-item @click="navigate('contact')">Contact</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    scroll(ref) {
      const element = document.getElementById(ref);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    navigate(ref) {
        this.drawer = false;

        this.$nextTick(() => {
            this.scroll(ref);
        });
    }
  }
};
</script>