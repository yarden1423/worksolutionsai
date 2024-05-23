import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? "https://back-worksolutionsai.apps.cluster-67msc.67msc.sandbox2228.opentlc.com/" : "http://localhost:5000"
})

export default () => {
  return {
    workplaces: {
      getAll: () => axiosInstance.get('/get_all_workplace'),
      findWorkplace: (cv) => axiosInstance.post('/find_workplace', { cv }),
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