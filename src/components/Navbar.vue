<template>
    <v-app-bar app color="white" class="px-12">
        <!-- <v-btn>
            <v-icon color="black" left class="mr-2" >mdi-home</v-icon>NJ
        </v-btn> -->
        <v-img src="@/assets/njlogo.png" alt="Porfolio Logo" class="rounded-lg" max-width="100" max-height="100" contain/>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('home')">Home</v-btn>
        <v-btn text @click="scroll('about')">About</v-btn>
        <v-btn text @click="scroll('skills')">Skills</v-btn>
        <v-btn text @click="scroll('projects')">Projects</v-btn>
        <v-btn text @click="scroll('contact')">Contact</v-btn>
        
    </v-app-bar>
</template>

<script>
export default {
    name: "NavBar",
    methods: {
        scroll(ref) {
            const element = document.getElementById(ref);
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>