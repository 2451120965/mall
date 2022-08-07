
import axios from 'axios'


// 第四种封装方法： instance就是一个axios实例，而axios本来就返回一个Promis对象
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance.interceptors.request.use( config => {

        return config
    }, err => {
        // console.log(err);
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        // console.log("响应失败！");
    })

    return instance(config)
}

export function newrequest(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    instance.interceptors.request.use( config => {

        return config
    }, err => {
        // console.log(err);
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        // console.log("响应失败！");
    })

    return instance(config)
}



// 第一种封装方法：  通过回调函数的方法实现
// export function request(config, success, failure) {
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     instance(config).then( res => {
//         success(res)
//     }).catch( err => {
//         failure(err)
//     })
// }


// 第二种封装方法：
// export function request(config) {
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     instance(config.url).then( res => {
//         config.success(res)
//     }).catch( err => {
//         config.failure(err)
//     })
// }

// 第三种封装方法（最终方案）：  return 一个Promise实例对象

// 这里可以export 多个请求函数  每个请求函数对应不同的请求实例对象
// export function request(config) {
    
//     return new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })


//         // 插播内容： 拦截器 在axios.interceptors,则是在全局的axios中设置了拦截器
//         // 这里我们只限制instance这一个网络请求实例的拦截器
//         // 有请求拦截器 和 响应拦截器 均有成功和失败的处理函数
//         instance.interceptors.request.use( config => {
//             console.log(config, "请求拦截成功！后续需要return config回去 放行，不然就一直在这里了");
//             // 1.一般在这里执行 验证请求的配置是否符合服务器的请求标准 如请求头啊啥的
//             // 2.比如 当发送请求时 需要弹出数据加载中或者其他类似的界面时 在这里show出来，然后在response里hiden

//             return config
//         }, err => {
//             console.log(err);
//         })

//         instance.interceptors.response.use( res => {
//             console.log(res, "这里是响应成功后的结果，一般里面的data才是服务器返回的数据，也是需要return出数据出去，不然就卡在这里了");
//             return res.data
//         }, err => {
//             console.log("响应失败！");
//         })

//         instance(config).then(res => {
//             resolve(res)
//         }).catch( err => {
//             reject(err)
//         })
        
//     })
// }




