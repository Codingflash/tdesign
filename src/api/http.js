import axios from 'axios'

const instance = axios.create({
    baseURL: '/mock',
    timeout: 5000,
    withCredentials:false
})

//请求拦截
instance.interceptors.request.use( (config)=> {
    let token = localStorage.getItem('token');
    if (token) {
        config.headers = Object.assign(config.headers,{token,'Retry-after':3000})
    }
    return config;
},  (error) => {
    return Promise.reject(error)
})


instance.interceptors.response.use( (response) =>{
    if(response.status === 200){
        console.log(response.data);
        return  response.data;
    }
     return response;
 },  (error) =>{
     let message=''
    if(error && error.response){
       switch (error.response.status) {
           case 400 : message='服务器无法理解请求的格式';break;
           case 401 : message='请求未授权';break;
           case 403 : message='禁止访问';break;
           case 404 : message='找不到如何与 URI 相匹配的资源';break;
           case 500 : message='最常见的服务器端错误';break;
           case 503 : message=' 服务器端暂时无法处理请求';break;
       }
 
    }
    Message({
        type:'error',
        message
    })
     return Promise.reject(error);
});
 
export default instance;