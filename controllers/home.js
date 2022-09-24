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
    getMenu: (req, res) => {
      res.render("menu.ejs")
    },
    getMessages: (req, res) => {
      res.render("messages.ejs")
    }
  };
