module.exports.home = (req, res) => {
  try {
    return res.render("home");
  } catch (error) {
    console.error(error);
  }
};
