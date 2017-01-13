import MyInfo from './'

module.exports = {
    path: 'myInfo',
    getComponent(nextState: ReactRouter.RouterState, cb: any) {
        cb(null, <typeof MyInfo>require('./'))
    }
}