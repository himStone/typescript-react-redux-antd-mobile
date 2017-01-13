import Home from './'

module.exports = {
    path: 'home',
    indexRoute: { onEnter: (nextState: any, replace: any) => replace('/home/homeContent') },    
    getComponent(nextState: ReactRouter.RouterState, cb: any) {
        cb(null, <typeof Home>require('./'))
    },
    childRoutes: [
        require('./containers/HomeContent/router'),
        require('./containers/CustomList/router'),
        require('./containers/MyInfo/router'),
    ]
}