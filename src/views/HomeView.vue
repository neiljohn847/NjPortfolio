<template>
  <v-app id="home">
    <Navbar />
    <v-container fluid>
      <div class="head">
        <v-row justify="center" align="center">
          <v-col cols="5">
            <div class="mt-16">
              <h1>Hello,</h1>
              <h1>I'm Neil John Bitangcol</h1>
              <span>Web Designer & Developer</span> <br>
              <span>Open to collaboration, knowledge-sharing, and exciting opportunities that push the boundaries of front-end development.
                Passionate about continous learning, adapting to new technologies, and delivering results that matter.
              </span>
            </div>
            <v-row justify="center">
              <v-btn @click="scrollTo('projects')" class="text-blue mt-8 mx-2" color="primary" tile dark>View My Work<v-icon class="mx-1" right>mdi-open-in-new</v-icon></v-btn>
              <v-btn @click="downloadResume" class="text-blue mt-8" color="primary" tile dark>Download Resume <v-icon class="mx-1" right>mdi-download</v-icon></v-btn>
            </v-row>
          </v-col>
        </v-row>
      </div>

      <v-col cols="12" class="mt-16" id="about">
        <h2 class="text-center mb-2">About Me</h2>
        <p class="text-center mb-8 grey--text">
          Learn more about my background, experience, and what drives my passion for development
        </p>
        <v-row justify="center" align="center">
          <v-col cols="5" >
            <div class="d-flex align-center justify-center">
               <v-img :src="require('@/assets/profile.jpg')" alt="Profile Picture" class="rounded-lg" max-width="350" max-height="350" contain/>
            </div>
          </v-col>

          <v-col cols="5">
            <p class="body-2">
              I'm Neil John Bitangcol, a passionate web designer and developer with a knack for creating visually stunning and user-friendly websites. With a strong foundation in front-end technologies, I specialize in crafting seamless digital experiences that captivate users and drive engagement.
            </p>
            <br>
            <p class="body-2">
              My journey in web development began with a fascination for design and a desire to bring ideas to life on the web. Over the years, I've honed my skills in HTML, CSS, JavaScript, and various frameworks to deliver responsive and dynamic websites that meet modern standards.
            </p>
            <br>
            <p class="body-2">
              Beyond coding, I thrive on collaboration and continuous learning. I believe that the best results come from teamwork and staying updated with the latest industry trends. Whether working on solo projects or as part of a team, I am committed to delivering high-quality work that exceeds expectations.
            </p>

            <v-row class="mt-8 text-center" v-intersect="onIntersect">
              <v-col cols="6" md="3">
                <div class="font-weight-bold text-h6">{{ experience }} + Years</div>
                <div class="grey--text">Experience</div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="font-weight-bold text-h6">{{ projects }} Completed</div>
                <div class="grey--text">Projects</div>
              </v-col>
              <!-- <v-col cols="6" md="3">
                <div class="font-weight-bold text-h6">{{ clients }}+ Happy</div>
                <div class="grey--text">Clients</div>
              </v-col> -->
              <v-col cols="6" md="3">
                <div class="font-weight-bold text-h6">∞ Cups</div>
                <div class="grey--text">Coffee</div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" class="mt-16" id="skills">
        <h2 class="text-center mb-2">Skills & Technologies</h2>
        <p class="text-center mb-8 grey--text">
          A comprehensive toolkit for building modern, scalable, and performant applications
        </p>

        <!-- Categories -->
        <v-row justify="center" align="stretch" class="mb-10">
          <!-- Frontend -->
          <v-col cols="12" md="3">
            <v-card outlined rounded="lg" class="pa-4">
              <h4 class="mb-4">Frontend Development</h4>
              <div class="d-flex flex-wrap gap-2">
                <v-chip class="ma-1 hover-chip" outlined small>Angular</v-chip>
                <v-chip class="ma-1 hover-chip" outlined small>Ionic</v-chip>
                <v-chip class="ma-1 hover-chip" outlined small>Vue.js</v-chip>
                <v-chip class="ma-1 hover-chip" outlined small>TypeScript</v-chip>
                <v-chip class="ma-1 hover-chip" outlined small>JavaScript</v-chip>
                <v-chip class="ma-1 hover-chip" outlined small>Vuetify</v-chip>
                <v-chip class="ma-1 hover-chip" outlined small>HTML/CSS</v-chip>
              </div>
            </v-card>
          </v-col>

          <!-- Backend -->
          <!-- <v-col cols="12" md="3">
            <v-card outlined rounded="lg" class="pa-4">
              <h4 class="mb-4">Backend Development</h4>
              <div class="d-flex flex-wrap gap-2">
                <v-chip class="ma-1 hover-chip" outlined small>PHP</v-chip>
              </div>
            </v-card>
          </v-col> -->

          <!-- Tools & Others -->
          <v-col cols="12" md="3">
            <v-card outlined rounded="lg" class="pa-4">
              <h4 class="mb-4">Tools & Others</h4>
              <div class="d-flex flex-wrap gap-2">
                <v-chip class="ma-1 hover-chip" outlined small>Figma</v-chip>
                <v-chip class="ma-1 hover-chip" outlined small>VS Code</v-chip>
                <v-chip class="ma-1 hover-chip" outlined small>Agile</v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- All Technologies -->
        <h3 class="text-center mb-4">All Technologies</h3>
        <v-row justify="center">
          <v-chip class="ma-2 hover-chip" outlined>Angular</v-chip>
          <v-chip class="ma-2 hover-chip" outlined>TypeScript</v-chip>
          <v-chip class="ma-2 hover-chip" outlined>JavaScript</v-chip>
          <v-chip class="ma-2 hover-chip" outlined>Vue.js</v-chip>
          <v-chip class="ma-2 hover-chip" outlined>Vuetify</v-chip>
          <v-chip class="ma-2 hover-chip" outlined>HTML/CSS</v-chip>
          <v-chip class="ma-2 hover-chip" outlined>Ionic</v-chip>
        </v-row>
      </v-col>

      <v-col cols="12" class="mt-16" id="projects">
        <h2 class="text-center mb-2">Featured Projects</h2>
        <p class="text-center mb-8 grey--text">
          A showcase of my recent work, demonstrating various skills and technologies
        </p>

        <v-row justify="center" align="stretch" dense>
          <!-- Project Card -->
          <v-col cols="12" md="4" v-for="(project, index) in projects_items" :key="index">
            <v-card class="project-card hoverable-card">
              <div class="image-wrapper">
                <v-carousel show-arrows-on-hover height="200" cycle interval="3000" >
                  <v-carousel-item v-for="(img, i) in project.images" :key="i">
                    <v-img :src="img" height="200px" />
                  </v-carousel-item>
                </v-carousel>
              </div>
              <v-card-title>{{ project.title }}</v-card-title>
              <v-card-text>
                <p>{{ project.description }}</p>
                <v-chip v-for="(tech, i) in project.technologies" :key="i" class="hover-chip mx-1" label small>{{ tech }}</v-chip>
              </v-card-text>
              <v-card-text><h4 class="project-start">{{ project.start }}</h4></v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-center mt-6">
          <v-btn @click="scrollTo('projects')" outlined rounded color="primary">
            View All Projects
            <v-icon right>mdi-open-in-new</v-icon>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" class="mt-16" id="contact">
        <h2 class="text-center mb-2">Get In Touch</h2>
        <p class="text-center mb-8 grey--text">
          Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
        </p>

        <v-row>
          <!-- Left side contact cards -->
          <v-col cols="12" md="6">
            <v-card class="mb-4 pa-4 hover-card" outlined>
              <v-row align="center">
                <v-col cols="2" class="text-center">
                  <v-icon size="36">mdi-email</v-icon>
                </v-col>
                <v-col>
                  <strong>Email</strong>
                  <div class="grey--text">neiljohnbitangcol@gmail.com</div>
                </v-col>
              </v-row>
            </v-card>

            <v-card class="mb-4 pa-4 hover-card" outlined>
              <v-row align="center">
                <v-col cols="2" class="text-center">
                  <v-icon size="36">mdi-linkedin</v-icon>
                </v-col>
                <v-col>
                  <strong>LinkedIn</strong>
                  <div class="grey--text">linkedin.com/in/neiljohnbitangcol</div>
                </v-col>
              </v-row>
            </v-card>

            <v-card class="mb-4 pa-4 hover-card" outlined>
              <v-row align="center">
                <v-col cols="2" class="text-center">
                  <v-icon size="36">mdi-github</v-icon>
                </v-col>
                <v-col>
                  <strong>GitHub</strong>
                  <div class="grey--text">github.com/neiljohnbitangcol</div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <!-- Right side contact form -->
          <v-col cols="12" md="6">
            <v-card class="pa-6" outlined>
              <h4 class="mb-4">Send me a message</h4>

              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Name" outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Email" outlined dense></v-text-field>
                </v-col>
              </v-row>

              <v-text-field class="mb-3" label="Subject" outlined dense></v-text-field>
              <v-textarea label="Message" outlined rows="4" auto-grow class="mb-4"></v-textarea>
              <v-btn block color="black" dark> Send Message <v-icon right class="ml-2">mdi-send</v-icon></v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default ({
  name: 'HomeView',

  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      // counters
      experience: 0,
      projects: 0,
      // clients: 0,

      // target values
      experiences: 2,
      target_projects: 3,
      // targetClients: 25,

      animated: false,

      projects_items: [
        {
          title: "Ecare App",
          description: "Ecare is a mobile and web application designed to provide comprehensive healthcare services with a responsive and user-friendly interface.",
          images: [require('@/assets/ECARESYSTEM.jpg')],
          technologies: ["Vue.js", "Vuetify", "PHP"],
          start: "2023 - Present"
        },
        {
          title: "Gordon College Student Attendance Monitoring System",
          description: "A full-stack monitoring system designed to streamline attendance tracking for students at Gordon College, providing an efficient and user-friendly interface for both students and administrators.",
          images: [require('@/assets/GCSampMobile.png'), require('@/assets/GCSAMPWEB-ADMIN.png'), require('@/assets/GCSAMPWEBFACULTY.png')],
          technologies: ["Ionic Framework", "AngularJS", "Bootstrap" , 'TypeScript', 'Php', 'JavaScript'],
          start: "2022 - 2023"
        },
        {
          title: "Cooking Co Mobile App",
          description: "A mobile application designed to provide users with a seamless and enjoyable cooking experience, offering a wide range of recipes, meal planning, and interactive features to enhance culinary creativity.",
          images: [require('@/assets/Cooking Co.png')],
          technologies: ["Angular", "TypeScript", "Php", "JavaScript", "JSON"],
          start: "2022"
        }
      ]
    };
  },

  methods: {
    onIntersect(intersecting) {
      if (intersecting && !this.animated) {
        this.animated = true;
        this.animateCounter("experience", this.experiences, 1500);
        this.animateCounter("projects", this.target_projects, 1500);
        // this.animateCounter("clients", this.targetClients, 1500);
      }
    },

    animateCounter(key, target, duration) {
      let start = 0;
      const step_time = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start++;
        this[key] = start;
        if (start >= target) {
          clearInterval(timer);
        }
      }, step_time);
    },

    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },

    downloadResume() {
      const link = document.createElement('a');
      link.href = window.location.origin + '/CV.pdf';
      link.download = 'CV.pdf';
      link.click();
    }
  },
})
</script>

<style scoped>
.v-container {
  padding: 16px 0;
}
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head h1, .head span {
  position: relative;
  z-index: 2;
  color: black;
}
.hover-chip {
  transition: all 0.3s ease;
}
.hover-chip:hover {
  background-color: #000000 !important; 
  color: black !important; 
  cursor: pointer;
}
.project-card {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}
.image-wrapper {
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.hover-image {
  transition: transform 0.4s ease;
}
.hover-image:hover {
  transform: scale(1.1);
}
.project-start{
  font-size: 1rem;
  color: #ff0000;
}
</style>
