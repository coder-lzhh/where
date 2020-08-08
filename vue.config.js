const path = require('path');//引入path模块
const city = require('./static/mock/city.json')
const home = require('./static/mock/index.json')
const detail = require('./static/mock/detail.json')

function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('assets', resolve('./src/assets'))
            .set('common', resolve('./src/components/common'))
            .set('content', resolve('./src/components/content'))
            .set('network', resolve('./src/network'))
            .set('views', resolve('./src/views'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
    },
    devServer: {
        before(app) {
            app.get('/api/city', function (req, res) {
                res.json({
                    errno: 0,
                    data: city
                })
            });
            app.get('/api/home', function (req, res) {
                res.json({
                    errno: 0,
                    data: home
                })
            });
            app.get('/api/detail', function (req, res) {
                res.json({
                    errno: 0,
                    data: detail
                })
            });
        }
    }
}