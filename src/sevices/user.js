import api from "./api"

export const getUser = async () => {
  return api.get('/users', {
      headers: { 'Content-Type': 'application/json' },
    }
  
  )
}