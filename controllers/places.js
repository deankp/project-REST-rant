const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant2.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/restaurant1.jpg'
      }]
      
    res.render('places/index', {places})
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

// NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router

