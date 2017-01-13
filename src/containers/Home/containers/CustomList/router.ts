import CustomerList from './'

module.exports = {
    path: 'customerList',
    getComponent(nextState: ReactRouter.RouterState, cb: any) {
        cb(null, <typeof CustomerList>require('./'))
    }
}