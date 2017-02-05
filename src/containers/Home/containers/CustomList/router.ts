module.exports = {
    path: 'customerList',
    getComponent(nextState: ReactRouter.RouterState, cb: any) {
        require.ensure([], (require: any) => {
            cb(null, require('.').default)
        })
    }
}