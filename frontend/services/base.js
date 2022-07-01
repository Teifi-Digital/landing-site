import { API_URL, NEXT_URL } from '@/config/index'
import { TRANS_MESSAGE } from '@/translations/en'

const _fetch = async (path) => {
  const response = await fetch(`${API_URL}/api${path}`)
  return await response.json()
}

const post = async (endpoint, body) => {
  try {
    const response = await fetch(`${API_URL}/api${endpoint}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        origin: NEXT_URL
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    if (data.error) {
      throw data.error
    }
    return { ok: true, ...data }
  } catch (error) {
    console.log('→ BaseService.post error', error)
    if(!error.message) {
      error.message = TRANS_MESSAGE['error_default_message']
    }
    if(!error.status) {
      error.status = 400
    }
    return { ok: false, data: null, error }
  }
}

const BaseService = {
  fetch: _fetch,
  post
}

export default BaseService
