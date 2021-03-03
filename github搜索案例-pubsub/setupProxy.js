const proxy = require('http-proxy-middleware')

module.exports= function(app){
    app.use(
        proxy('/luo',{
            target:'http://localhost:3009',
            changeOrigin:true,
            pathRewrite:{'^/luo':''}
        })
    )
}