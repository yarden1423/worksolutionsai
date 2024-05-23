import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000"
})

export default () => {
  return {
    workplaces: {
      getAll: () => axiosInstance.get('workplaces'),
      getWorkplacesByTaz: (taz) => axiosInstance.get('', taz),
    },
    users: {
      login: () => {},
      signup: () => {} 
    },
    skills: {
      getAll: () => axiosInstance.get(''),
    },
    themes: {
      getAll: () => axiosInstance.get(''),
    }
  }
}