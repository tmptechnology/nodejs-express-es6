const showUserPage = async (req, res) => {
  res.render('index', { title: 'User Page' })
}

export {
  showUserPage
}
