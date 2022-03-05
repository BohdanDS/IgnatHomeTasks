import axios, {AxiosResponse} from 'axios'

export const NekoCafeAPI = {
    setCheckbox (value:boolean){
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: value})
    }
}