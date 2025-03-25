import axios from 'axios'

// Make a request for a user with a given ID
axios
  .get(
    'https://technosuccess.ru/index.php?dispatch=products.search&q=Perfeo&search_performed=Y'
  )
  .then(function (response) {
    // handle success
    // console.log('status: ', response.status)
    // console.log('statusText: ', response.statusText)
    // console.log('headers: ', response.headers)
    // console.log('config: ', response.config)
    // console.log('request: ', response.request)
    // console.log('data: ', response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(function () {
    // always executed
  })