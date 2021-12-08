const indexPage = async (req, res) => {
    if (req.user) {
        res.render('index', {title: 'Welcome'})
    } else {
        res.redirect('/auth/login')
    }
}

export {
    indexPage
}
