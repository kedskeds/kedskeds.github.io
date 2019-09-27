var express = require('express');
var router = express.Router();

var projects = [
  {
    name: "OXLY / Custom Site",
    link: "https://staging-oxly-at-the-merc-san-antonio-tx.leaselabs-staging.com/staging-oxly-at-the-merc-san-antonio-tx/",
    title: "OXLY",
    lang: "Rails, HAML, SCSS, JQuery, ScrollMagic",
    features: "CMS-editable website with custom ScrollMagic animations and parallax.",
    image: "url(../images/oxly.png)"
  },
  {
    name: "Engage / Hack for LA",
    link: "https://github.com/hackla-engage",
    title: "Engage",
    lang: "React, Redux",
    features: "In 2019 I started attending a weekly Code for America meetup to address LA's biggest civic issues. Engage is an application that makes it easier for citizens to vote on proposals from their local government.",
    image: "url(../images/engage.png)"
  },
  {
    id:0,
    name:"Muse / Custom Theme",
    link:"https://www.itsyourmusebg.com",
    title:"Muse",
    lang:"Rails, HAML, SCSS, JQuery, Foundation, Lazyloading, Google Maps API, AOS",
    features:"I built this website theme to be entirely CMS-editable, down to the color palette.",
    image:"url(../images/muse.png)"
  },
  {
    id:1,
    name:"GOA / Search Tool",
    link:"ttps://globalonlineacademy.org/what-we-do/student-program/student-courses",
    title:"Global Online Academy",
    lang:"Vue.JS",
    features:"Using data from a course catalog API, I built a reactive search tool that enables students to quickly sort and filter a list of classes offered.",
    image:"url(../images/goa.png)"
  },
  {
    id:2,
    name:"Vestalia / Custom Site",
    link:"https://www.vestaliaglendale.com/vestalia-glendale-ca/",
    title:"Lincoln - Vestalia",
    lang:"Rails, HAML, SCSS, JQuery, Foundation, ScrollMagic, SVG animations",
    features:"CMS-editable website built for a luxury apartment complex in Los Angeles.",
    image:"url(../images/vestalia.png)"
  },
  {
    id:3,
    name:"Sutter Green / Custom Site",
    link:"https://www.suttergreenapts.net/sutter-green-sacramento-ca/",
    title:"Sutter Green",
    lang:"Rails, HAML, SCSS, JQuery, Foundation, ScrollMagic, AOS",
    features:"",
    image:"url(../images/sutter-green.png)"
  },
  {
    id:4,
    name:"LPC / Infographic",
    link:"https://www.lincolnapts.com/lpc-live-inspired/live-your-bliss",
    title:"Lincoln Property Company",
    lang:"HAML, SCSS, JQuery, ScrollMagic, Greensock, SVG animations",
    features:"Every quarter, Lincoln Property Company puts out an animated, scrolling infographic. I developed the Q3 and Q4 infographics for 2018.",
    image:"url(../images/lincoln.png)"
  },
  {
    id:5,
    name:"CWS Students / Custom Theme",
    link:"https://www.cwsapartments.com/regents-west-at-24th-austin-tx/",
    title:"Regents West",
    lang:"Rails, HAML, SCSS, JQuery, Foundation",
    features:"CMS-editable theme for student housing in Austin, TX.",
    image:"url(../images/students.png)"
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Kelsey Edelstein | Web Developer',
    projects: projects
  });
});

module.exports = router;
