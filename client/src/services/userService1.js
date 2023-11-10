 const baseUrl = 'http://localhost:3030/jsonstore/users'

 export const getAll = async () => {
  
       const response = await fetch(baseUrl)
       const result = response.json()
       
       const data = Object.values(result)

       return data
 }