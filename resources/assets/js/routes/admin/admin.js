import {AppTitle} from '../../utility/config';
import adminGuard from '../guard/adminGuard'

//Header
const DefaultHeader = () => import('../../components/partials/Header/DefaultHeader');
//Footer
const DefaultFooter = () => import('../../components/partials/Footer/DefaultFooter');

const AdminDashboard = () => import('../../components/admin/adminDashboard');
const Overview = () => import('../../components/admin/overview/Overview');
const Users = () => import('../../components/admin/users/Users');
const UserEdit = () => import('../../components/admin/users/UserEdit');

const Icons = () => import('../../components/admin/icons/Icons');
const IconForm = () => import('../../components/admin/icons/IconForm');

const Orders = () => import('../../components/admin/orders/Orders');
const OrderForm = () => import('../../components/admin/orders/OrderForm');

const Packages = () => import('../../components/admin/packages/Packages');
const PackageForm = () => import('../../components/admin/packages/PackageForm');

const Partners = () => import('../../components/admin/partners/Partners');
const PartnerForm = () => import('../../components/admin/partners/PartnerForm');


export default [

  {
    name: 'adminDashboard',
    path: '/admin/',
    beforeEnter: adminGuard,
    components: {
      default: AdminDashboard,
      header: DefaultHeader,
    }, meta: {
      title: AppTitle + 'Admin',
      requiresAuth: true
    }, children: [
      {
        name: 'adminOverview',
        path: 'dashboard',
        beforeEnter: adminGuard,
        component: Overview,
        meta: {
          title: AppTitle + 'Overview',
        },
      },
      {
        name: 'adminUsers',
        path: 'dashboard/users',
        beforeEnter: adminGuard,
        component: Users,
        meta: {
          title: AppTitle + 'Users ',
        },
      },
      {
        name: 'adminUsersEdit',
        path: 'dashboard/users/:userId',
        beforeEnter: adminGuard,
        component: UserEdit,
        meta: {
          title: AppTitle + 'User Bearbeiten',
        },
      },
      {
        name: 'adminIcons',
        path: 'dashboard/icons/',
        beforeEnter: adminGuard,
        component: Icons,
        meta: {
          title: AppTitle + 'Icons',
        },
      },
      {
        name: 'adminIconsCreate',
        path: 'dashboard/icon/create',
        beforeEnter: adminGuard,
        component: IconForm,
        meta: {
          title: AppTitle + 'Icon Erstellen',
        },
      }, {
        name: 'adminIconsEdit',
        path: 'dashboard/icon/:iconId/edit',
        beforeEnter: adminGuard,
        component: IconForm,
        meta: {
          title: AppTitle + 'Icons Bearbeiten',
        },
      },
      {
        name: 'adminOrders',
        path: 'dashboard/orders',
        beforeEnter: adminGuard,
        component: Orders,
        meta: {
          title: AppTitle + 'Bestellungen',
        },
      }, {
        name: 'adminOrdersEdit',
        path: 'dashboard/order/:orderId',
        beforeEnter: adminGuard,
        component: OrderForm,
        meta: {
          title: AppTitle + 'Bestellung Bearbeiten',
        },
      },
      {
        name: 'adminPackages',
        path: 'dashboard/packages',
        beforeEnter: adminGuard,
        component: Packages,
        meta: {
          title: AppTitle + 'Pakete',
        },
      }, {
        name: 'adminPackagesCreate',
        path: 'dashboard/package/create',
        beforeEnter: adminGuard,
        component: PackageForm,
        meta: {
          title: AppTitle + 'Paket Erstellen',
        },
      }, {
        name: 'adminPackagesEdit',
        path: 'dashboard/package/:packageId',
        beforeEnter: adminGuard,
        component: PackageForm,
        meta: {
          title: AppTitle + 'Paket Bearbeiten',
        },
      }, {
        name: 'adminPartners',
        path: 'dashboard/partners',
        beforeEnter: adminGuard,
        component: Partners,
        meta: {
          title: AppTitle + 'Partners',
        },
      }
      ,{
        name: 'adminPartnerCreate',
        path: 'dashboard/partner/create',
        beforeEnter: adminGuard,
        component: PartnerForm,
        meta: {
          title: AppTitle + 'Partner Erstellen',
        },
      }
      , {
        name: 'adminPartnerEdit',
        path: 'dashboard/partner/:partnerId',
        beforeEnter: adminGuard,
        component: PartnerForm,
        meta: {
          title: AppTitle + 'Partner Bearbeiten',
        },
      },
    ]
  },
]
