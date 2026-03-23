<template>
  <v-app id="home">
    <Navbar />
    <v-container fluid>
      <div class="head">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="10" md="8" lg="6">
            <transition name="fade-slide" appear>
              <div class="mt-5">
                <h1>Hello,</h1>
                <h1>I'm Neil John Bitangcol</h1>
                <span>Web Designer & Developer</span> <br>
                <span>Open to collaboration, knowledge-sharing, and exciting opportunities that push the boundaries of front-end development.
                  Passionate about continous learning, adapting to new technologies, and delivering results that matter.
                </span>
              </div>
            </transition>
            
            <v-row justify="center">
              <v-btn @click="scrollTo('projects')" class="text-blue mt-8 mx-2" color="primary" tile dark>View My Work<v-icon class="mx-1" right>mdi-open-in-new</v-icon></v-btn>
              <v-btn @click="downloadResume" :loading="loading_download" class="text-blue mt-8" color="primary" tile dark>Download Resume <v-icon class="mx-1" right>mdi-download</v-icon></v-btn>
            </v-row>
          </v-col>
        </v-row>
      </div>

      <v-col v-intersect="(e, o) => onIntersectSection(e, o, 'show_about')" cols="12" class="mt-16" id="about">
        <transition name="fade-slide">
          <div v-if="show_about">
            <h2 class="text-center mb-2">About Me</h2>
            <p class="text-center mb-8 grey--text">
              Learn more about my background, experience, and what drives my passion for development
            </p>
            <v-row justify="center" align="center">
              <v-col cols="12" sm="6" md="6" lg="5">
                <div class="d-flex align-center justify-center">
                  <v-img :src="require('@/assets/profile.jpg')" alt="Profile Picture" class="rounded-lg" max-width="350" max-height="350" contain/>
                </div>
              </v-col>

              <v-col cols="12" sm="6" md="6" lg="5">
                <p class="body-2">
                  I'm Neil John Bitangcol, a passionate web designer and developer with a knack for creating visually stunning and user-friendly websites. With a strong foundation in front-end technologies, I specialize in crafting seamless digital experiences that captivate users and drive engagement.
                <br>
                  My journey in web development began with a fascination for design and a desire to bring ideas to life on the web. Over the years, I've honed my skills in HTML, CSS, JavaScript, and various frameworks to deliver responsive and dynamic websites that meet modern standards.
                <br>
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
                  <v-col cols="6" md="3">
                    <div class="font-weight-bold text-h6">∞ Cups</div>
                    <div class="grey--text">Coffee</div>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" class="mt-16">
                <h3 class="text-center mb-10 font-weight-bold">Education</h3>

                <v-timeline align="start" dense class="custom-timeline">
                  <v-timeline-item v-for="(item, i) in education" :key="i" :side="i % 2 === 0 ? 'start' : 'end'" :icon="item.icon" dot-color="primary" fill-dot>
                    <v-card class="timeline-card pa-5" elevation="2">
                      <div class="text-caption font-weight-medium primary--text mb-1"> {{ item.year }} </div>
                      <div class="text-h6 font-weight-bold mb-1"> {{ item.degree }} </div>
                      <div class="grey--text text--darken-1 mb-2"> {{ item.school }} </div>
                      <div class="body-2 grey--text text--darken-2">{{ item.description }}</div>

                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-col>

              <v-col cols="12" class="mt-16">
                <h3 class="text-center mb-10 font-weight-bold">Work Experience</h3>
                <v-timeline align="start" dense class="custom-timeline">
                  <v-timeline-item v-for="(job, i) in work_experiences" :key="i" :side="i % 2 === 0 ? 'start' : 'end'" :icon="job.icon" dot-color="primary" fill-dot>
                    <v-card class="timeline-card pa-5" elevation="2">
                      <div class="text-caption font-weight-medium primary--text mb-1"> {{ job.duration }}</div>
                      <div class="text-h6 font-weight-bold mb-1">{{ job.position }}</div>
                      <div class="grey--text text--darken-1 mb-2">{{ job.company }}</div>
                      <ul class="pl-4 grey--text text--darken-2">
                        <li v-for="(task, index) in job.responsibilities" :key="index">{{ task }}</li>
                      </ul>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-col>
            </v-row>
          </div>
        </transition>
      </v-col>

      <v-col v-intersect="(e, o) => onIntersectSection(e, o, 'show_skills')" cols="12" class="mt-16" id="skills">
        <transition name="fade-slide">
          <div v-if="show_skills">
            <h2 class="text-center mb-2">Skills & Technologies</h2>
            <p class="text-center mb-8 grey--text">
              A comprehensive toolkit for building modern, scalable, and performant applications
            </p>

            <v-row justify="center" align="stretch" class="mb-10">
              <v-col cols="12" sm="6" md="5" lg="5">
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

              <v-col cols="12" sm="6" md="5" lg="5">
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

            <h3 class="text-center mb-4">All Technologies</h3>
            <v-row justify="center" dense>
              <v-chip class="ma-2 hover-chip" outlined>Angular</v-chip>
              <v-chip class="ma-2 hover-chip" outlined>TypeScript</v-chip>
              <v-chip class="ma-2 hover-chip" outlined>JavaScript</v-chip>
              <v-chip class="ma-2 hover-chip" outlined>Vue.js</v-chip>
              <v-chip class="ma-2 hover-chip" outlined>Vuetify</v-chip>
              <v-chip class="ma-2 hover-chip" outlined>HTML/CSS</v-chip>
              <v-chip class="ma-2 hover-chip" outlined>Ionic</v-chip>
            </v-row>
          </div>
        </transition>
      </v-col>

      <v-col v-intersect="(e, o) => onIntersectSection(e, o, 'show_projects')" cols="12" class="mt-16" id="projects">
        <transition name="fade-slide">
          <div v-if="show_projects">
            <h2 class="text-center mb-2">Featured Projects</h2>
            <p class="text-center mb-8 grey--text">
              A showcase of my recent work, demonstrating various skills and technologies
            </p>

            <v-row justify="center" align="stretch" dense>
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
                    <v-row dense class="mt-2">
                      <v-chip v-for="(tech, i) in project.technologies" :key="i" class="hover-chip ma-1" label small>{{ tech }}</v-chip>
                    </v-row>
                  </v-card-text>
                  <v-card-text><h4 class="project-start">{{ project.start }}</h4></v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </transition>
        
        <div class="text-center mt-6">
          <v-btn @click="scrollTo('projects')" outlined rounded color="primary">
            View All Projects
            <v-icon right>mdi-open-in-new</v-icon>
          </v-btn>
        </div>
      </v-col>

      <v-col v-intersect="(e, o) => onIntersectSection(e, o, 'show_contact')" cols="12" class="mt-16" id="contact">
        <transition name="fade-slide">
          <div v-if="show_contact">
            <h2 class="text-center mb-2">Get In Touch</h2>
            <p class="text-center mb-8 grey--text">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>

            <v-row dense>
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
                      <div class="grey--text">github.com/neiljohn847</div>
                    </v-col>
                  </v-row>
                </v-card>

                <v-card class="mb-4 pa-4 hover-card" outlined>
                  <v-row align="center">
                    <v-col cols="2" class="text-center">
                      <v-icon size="36">mdi-map</v-icon>
                    </v-col>
                    <v-col>
                      <strong>Location</strong>
                      <div class="grey--text">Olongapo City, Zambales, Philippines</div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

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
          </div>
        </transition>
        
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
      experience: 0,
      projects: 0,
      experiences: 2,
      target_projects: 3,
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
      ],
      education: [
        {
          school: "Gordon College",
          degree: "Bachelor of Science in Information Technology",
          year: "2019 - 2023",
          icon: "mdi-school"
        },
        {
          school: "Gordon College",
          degree: "TVL - ICT",
          year: "2017 - 2019",
          icon: "mdi-school"
        },
        {
          school: "Olongapo City National High School",
          degree: "Junior High School",
          year: "2013 - 2016",
          icon: "mdi-school"
        }
      ],
      work_experiences: [
        {
          position: "Frontend Developer",
          company: "Eurekare Corp.",
          duration: "July 31,2023 - Present",
          responsibilities: [
            "Maintaining and improving the existing codebase of the Ecare web application",
            "Creating new features and functionalities based on what clients need",
            "Optimized performance and accessibility"
          ],
          icon: "mdi-laptop"
        },
        {
          position: "Web Developer Intern",
          company: "IformatLogic IT Solutions",
          duration: "Feb 1 - May 2 (2023)",
          responsibilities: [
            "Practicum 2(OJT)",
            "Converted the HTML Template into a fully functional website using Wordpress",
            "Creating an Ecommerce Website using Woocommerce and Wordpress."
          ],
          icon: "mdi-code-tags"
        },
        {
          position: "Quality Assurance",
          company: "Gordon College",
          duration: "Jun 21 - Jul 3 (2022)",
          responsibilities: [
            "Practicum 1 (OJT)",
            "Checking the design in the powerpoint presentation for graduation"
          ],
          icon: "mdi-shield-check"
        },
        {
          position: "Technician Assistant",
          company: "Keanna Computer Center",
          duration: "Feb 19 - Mar 1 (2019)",
          responsibilities: [
            "Work Immersion (OJT)",
            "Assisting the technicians with various tasks such as troubleshooting hardware and software issues, performing maintenance on computer systems, and providing technical support to customers."
          ],
          icon: "mdi-tools"
        }
      ],
      loading_download: false,
      show_about: false,
      show_skills: false,
      show_projects: false,
      show_contact: false,
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

    onIntersectSection(entries, observer, section) {
      if (entries[0].isIntersecting) {
        this[section] = true
        observer.unobserve(entries[0].target)
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

    // downloadResume() {
    //   const link = document.createElement('a');
    //   link.href = window.location.origin + '/Resume.pdf';
    //   link.download = 'Resume.pdf';
    //   link.click();
    // }
  },
})
</script>

<style scoped>
.head {
  position: relative;
  text-align: center;
  margin-bottom: 6px;
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
  background-color: #b9b5b5 !important; 
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
.fade-slide-enter-active {
  transition: all 1s ease;
}
.fade-slide-leave-active {
  transition: all 1s ease;
}
.fade-slide-enter {
  opacity: 0;
  transform: translateY(50px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.project-card {
  transition: all 1s ease;
}
.project-card:hover {
  transform: translateY(-10px);
}
</style>
