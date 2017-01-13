import Home from './'

module.exports = {
    path: 'home',
    getComponent(nextState: ReactRouter.RouterState, cb: any) {
        cb(null, <typeof Home>require('./'))
    }
}