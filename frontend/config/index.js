let NEXT_URL, API_URL

if (process.env.NODE_ENV === 'production') {
  NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'
  API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:1337'
} else {
  NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'
  API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:1337'
}


module.exports.NEXT_URL = NEXT_URL
module.exports.API_URL = API_URL