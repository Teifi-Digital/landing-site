import { API_URL } from '@/config/index'

const _fetch = async (path) => {
  const response = await fetch(`${API_URL}/api${path}`)
  return await response.json()
}

const BaseService = {
  fetch: _fetch,
}

export default BaseService
