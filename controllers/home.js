const Cake = require("../models/cake");

module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    getAbout: (req, res) => {
      res.render("about.ejs")
    },
    getGallery: (req, res) => {
      res.render("gallery.ejs")
    },
    getTestimonials: (req, res) => {
      res.render("testimonials.ejs")
    },
    getMenu: async (req, res) => {
      try {
        const cakes = await Cake.find({}).lean()
        res.render("menu.ejs", {cakes: cakes})
      } catch (err) {
        console.log(err)
      }
    },
    getMessages: (req, res) => {
      res.render("messages.ejs")
    }
  };
