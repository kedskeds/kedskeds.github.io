var express = require('express');
var router = express.Router();

var projects = [
  {
    name: "Targa / Corporate Site",
    link: "https://staging-targa.leaselabs-staging.com/",
    title: "Targa",
    lang: "Angular, Rails, HAML, SCSS, JQuery, ScrollMagic, AOS",
    features: "Custom corporate site.",
    image: "url(../images/targa.png)"
  },
  {
    name: "KETTLER / Corporate Site",
    link: "https://staging-kettler.leaselabs-staging.com/",
    title: "KETTLER",
    lang: "Angular, Rails, HAML, SCSS, JQuery",
    features: "Custom corporate site with 20+ pages, built with about 15 modular/reusable components.",
    image: "url(../images/kettler.png)"
  },
  {
    name: "OXLY / Custom Site",
    link: "https://www.oxlyapts.com/oxly-at-the-merc-san-antonio-tx/",
    title: "OXLY",
    lang: "Rails, HAML, SCSS, JQuery, ScrollMagic",
    features: "CMS-editable website with custom ScrollMagic animations and parallax.",
    image: "url(../images/oxly.png)"
  },
  // {
  //   name: "Engage / Hack for LA",
  //   link: "https://github.com/hackla-engage",
  //   title: "Engage",
  //   lang: "React, Redux",
  //   features: "In 2019 I started attending a weekly Code for America meetup to address LA's biggest civic issues. Engage is an application that makes it easier for citizens to vote on proposals from their local government.",
  //   image: "url(../images/engage.png)"
  // },
  {
    name:"Muse / Custom Theme",
    link:"https://www.itsyourmusebg.com",
    title:"Muse",
    lang:"Rails, HAML, SCSS, JQuery, Foundation, Lazyloading, Google Maps API, AOS",
    features:"I built this website theme to be entirely CMS-editable, down to the color palette.",
    image:"url(../images/muse.png)"
  },
  {
    name:"GOA / Search Tool",
    link:"https://globalonlineacademy.org/what-we-do/student-program/student-courses",
    title:"Global Online Academy",
    lang:"Vue.JS",
    features:"Using data from a course catalog API, I built a reactive search tool that enables students to quickly sort and filter a list of classes offered.",
    image:"url(../images/goa.png)"
  },
  {
    name:"Vestalia / Custom Site",
    link:"https://www.vestaliaglendale.com/vestalia-glendale-ca/",
    title:"Lincoln - Vestalia",
    lang:"Rails, HAML, SCSS, JQuery, Foundation, ScrollMagic, SVG animations",
    features:"CMS-editable website built for a luxury apartment complex in Los Angeles.",
    image:"url(../images/vestalia.png)"
  },
  {
    name:"Sutter Green / Custom Site",
    link:"https://www.suttergreenapts.net/sutter-green-sacramento-ca/",
    title:"Sutter Green",
    lang:"Rails, HAML, SCSS, JQuery, Foundation, ScrollMagic, AOS",
    features:"",
    image:"url(../images/sutter-green.png)"
  },
  {
    name:"LPC / Infographic",
    link:"https://www.lincolnapts.com/lpc-live-inspired/live-your-bliss",
    title:"Lincoln Property Company",
    lang:"HAML, SCSS, JQuery, ScrollMagic, Greensock, SVG animations",
    features:"Every quarter, Lincoln Property Company puts out an animated, scrolling infographic. I developed the Q3 and Q4 infographics for 2018.",
    image:"url(../images/lincoln.png)"
  },
  {
    name:"CWS Students / Custom Theme",
    link:"https://www.cwsapartments.com/regents-west-at-24th-austin-tx/",
    title:"Regents West",
    lang:"Rails, HAML, SCSS, JQuery, Foundation",
    features:"CMS-editable theme for student housing in Austin, TX.",
    image:"url(../images/students.png)"
  }
];

posts = [
  {
    date: "09/28/2019",
    title: "Blog post 1",
    preview: "",
    body: ""
  },
  {
    date: "10/29/2019",
    title: "Blog post 2",
    preview: "",
    body: ""
  },
  {
    date: "10/29/2019",
    title: "Blog post 3",
    preview: "",
    body: ""
  },
  {
    date: "10/29/2019",
    title: "Blog post 4",
    preview: "",
    body: ""
  },
  {
    date: "10/29/2019",
    title: "Blog Post 5",
    preview: "",
    body: ""
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Kelsey Edelstein | Web Developer',
    projects: projects
  });
});
/* GET blog */
router.get('/blog', function(req, res, next) {
  res.render('blog', {
    title: 'Kelsey Edelstein | Blog',
    posts: posts
  });
});
/* GET blog post */
router.get('/blog/:id', function(req, res, next) {
  res.render('post', {
    post: posts[req.params.id]
  });
});

module.exports = router;
