import { React, lazy } from 'react';

const routes = [
      {
        path: 'cms',
        component: lazy(() => import('../../layout/admin/main')),
        exact: true
      },
      {
        path: 'cms/users',
        component: lazy(() => import('../../modules/users/admin/views')),
        exact: true
      },
      {
        path: 'cms/users/user/:id',
        component: lazy(() => import('../../modules/users/admin/views/user')),
        exact: false
      },
      {
        path: 'cms/users/user',
        component: lazy(() => import('../../modules/users/admin/views/user')),
        exact: false
      },
      {
        path: 'cms/logs',
        component: lazy(() => import('../../modules/logs/admin/views')),
        exact: true
      },
    ];
    
    export default routes;

// const NotFoundPage = () => (
//       <div>
//             404 - <Link to="/">go home</Link>
//       </div>
// );

// const routes = (
//       <BrowserRouter>
//             <div>
//                   <Switch>
//                         <Route path="/" component={SiteMain} exact={true} />
//                         <Route path="/cms" component={AdminMain} exact={true} />
//                         <Route path="/cms/users" component={UserList} />
//                         <Route component={NotFoundPage} />
//                   </Switch>
//             </div>
//       </BrowserRouter>
// );

// export default routes;