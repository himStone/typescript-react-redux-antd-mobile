module.exports = {
    path: 'homeContent',
    getComponent(nextState: ReactRouter.RouterState, cb: any) {
        require.ensure([], (require: any) => {
            cb(null, require('.').default)
        })
    }
}