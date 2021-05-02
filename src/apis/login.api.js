import api from '../infra/api-config'

export function loginUser(user){
    const url = '/users/login'
    console.log('entrou no loginUser')
    
    const data  = {
        email : user.email,
        password: user.password
    }
    
    return api().post(url,data)
 }