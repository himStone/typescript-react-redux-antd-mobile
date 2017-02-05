module.exports = {
    path: 'home',
    indexRoute: { onEnter: (nextState: any, replace: any) => replace('/home/homeContent') },    
    getComponent(nextState: ReactRouter.RouterState, cb: any) {
        require.ensure([], (require: any) => {
            cb(null, require('.').default)
        })
    },
    childRoutes: [
        require('./containers/HomeContent/router'),
        require('./containers/CustomList/router'),
        require('./containers/MyInfo/router'),
    ]
}