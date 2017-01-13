import HomeContent from './'

module.exports = {
    path: 'homeContent',
    getComponent(nextState: ReactRouter.RouterState, cb: any) {
        cb(null, <typeof HomeContent>require('./'))
    }
}