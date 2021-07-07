import {AppTitle} from '../../utility/config';
import userGuard from '../guard/userGuard'

//Header
const DefaultHeader = () => import('../../components/partials/Header/DefaultHeader');
//Footer
const DefaultFooter = () => import('../../components/partials/Footer/DefaultFooter');


//User Components: Dashboard + Children Routes  - Routes für User
const Dashboard = () => import('../../components/dashboard/Dashboard');
//Account Components: Show,Edit,Delete
const Account = () => import('../../components/dashboard/account/Account');
const AccountForm = () => import('../../components/dashboard/account/AccountForm');
const AccountDelete = () => import('../../components/dashboard/account/AccountDelete');
//Category Components: Show, Edit, Delete
const Category = () => import('../../components/dashboard/category/Category');
const CategoryForm = () => import('../../components/dashboard/category/CategoryForm');
const CategoryDelete = () => import('../../components/dashboard/category/CategoryDelete');
//Booking Records Components: Show,Edit,Delete
const BookingRecordShow = () => import('../../components/dashboard/booking-records/BookingRecordShow');
const BookingRecordForm = () => import('../../components/dashboard/booking-records/BookingRecordForm');
const BookingRecordDelete = () => import('../../components/dashboard/booking-records/BookingRecordDelete');
//Passbook Components: Show, Edit, Delete
const Passbook = () => import('../../components/dashboard/passbook/Passbook');
const PassbookForm = () => import('../../components/dashboard/passbook/PassbookForm');
const PassbookDelete = () => import('../../components/dashboard/passbook/PassbookDelete');
//CSV Components: CSV Import
const ImportCSV = () => import('../../components/dashboard/csv/ImportCSV');
const ExportCSV = () => import('../../components/dashboard/csv/ExportCSV');
//User Profile Components:
const Profile = () => import('../../components/dashboard/Profile');


export default [

  {
    name: 'dashboard',
    path: '/dashboard',
    beforeEnter: userGuard,
    components: {
      default: Dashboard,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Dashboard',
      requiresAuth: true
    }, children: [
      {
        name: 'accountCreate',
        path: 'account/create',
        beforeEnter: userGuard,
        component: AccountForm,
        meta: {
          title: AppTitle + 'Konto Erstellen',
          requiresAuth: true
        },
      }, {
        name: 'passbookCreate',
        path: 'passbook/create',
        beforeEnter: userGuard,
        component: PassbookForm,
        meta: {
          title: AppTitle + 'Sparkonto Erstellen',
          requiresAuth: true
        },
      },
      {
        path: 'passbook/:passbookId/edit',
        name: 'passbookUpdate',
        beforeEnter: userGuard,
        component: AccountForm,
        meta: {
          title: AppTitle + 'Sparkonto Erstellen',
          requiresAuth: true
        },
      },
      {
        path: 'passbook/:passbookId',
        name: 'passbookShow',
        beforeEnter: userGuard,
        component: Passbook,
        meta: {
          title: AppTitle + 'Sparkonto',
          requiresAuth: true
        },
      },    {
        path: 'passbook/:passbookId/edit',
        name: 'passbookEdit',
        beforeEnter: userGuard,
        component: PassbookForm,
        meta: {
          title: AppTitle + 'Sparkonto Bearbeiten',
          requiresAuth: true
        },
      },   {
        path: 'passbook/:passbookId/delete',
        name: 'passbookDelete',
        beforeEnter: userGuard,
        component: PassbookDelete,
        meta: {
          title: AppTitle + 'Sparkonto Löschen',
          requiresAuth: true
        },
      },
    ]
  },
  {
    name: 'accountShow',
    path: '/account/:accountId',
    props: true,
    beforeEnter: userGuard,
    components: {
      default: Account,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Konto Übersicht',
      requiresAuth: true
    }, children: [
      {
        name: 'accountEdit',
        path: 'edit',
        component: AccountForm,
        meta: {
          title: AppTitle + 'Konto Bearbeiten',
          requiresAuth: true
        },
      }, {
        name: 'accountDelete',
        path: 'delete',
        component: AccountDelete,
        meta: {
          title: AppTitle + 'Konto Löschen',
          requiresAuth: true
        },
      },
      {
        name: 'categoryCreate',
        path: 'category/create',
        component: CategoryForm,
        meta: {
          title: AppTitle + 'Kategorie Erstellen',
          requiresAuth: true
        },
      },
      //Booking Records - Buchungen
      {
        name: 'account.bookingRecordShow',
        path: 'c/:categoryId/booking-records/:bookingRecordId/',
        component: BookingRecordShow,
        meta: {
          title: AppTitle + 'Buchung',
          requiresAuth: true
        },
      }, {
        name: 'account.bookingRecordEdit',
        path: 'c/:categoryId/booking-records/:bookingRecordId/edit',
        component: BookingRecordForm,
        meta: {
          title: AppTitle + 'Buchungssatz Bearbeiten',
        },
      }, {
        name: 'account.bookingRecordDelete',
        path: 'c/:categoryId/booking-records/:bookingRecordId/delete',
        component: BookingRecordDelete,
        meta: {
          title: AppTitle + 'Buchungssatz Löschen',
        },
      },
    ],
  },
  //Category Path
  {
    name: 'categoryShow',
    path: '/account/:accountId/category/:categoryId',
    beforeEnter: userGuard,
    components: {
      default: Category,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Kategorie Übersicht',
      requiresAuth: true
    }, children: [
      {
        name: 'categoryEdit',
        path: 'edit',
        component: CategoryForm,
        meta: {
          title: AppTitle + 'Kategorie Bearbeiten',
          requiresAuth: true
        },
      }, {
        name: 'categoryDelete',
        path: 'delete',
        component: CategoryDelete,
        meta: {
          title: AppTitle + 'Kategorie Löschen',
          requiresAuth: true
        },
      },
      {
        name: 'bookingRecordCreate',
        path: 'booking-records/create',
        component: BookingRecordForm,
        meta: {
          title: AppTitle + 'Buchung Erstellen',
          requiresAuth: true
        },
      },
      //Booking Records - Buchungen
      {
        name: 'category.bookingRecordShow',
        path: 'booking-records/:bookingRecordId',
        component: BookingRecordShow,
        meta: {
          title: AppTitle + 'Buchung',
          requiresAuth: true
        },
      },
      {
        name: 'category.bookingRecordEdit',
        path: 'booking-records/:bookingRecordId/edit',
        component: BookingRecordForm,
        meta: {
          title: AppTitle + 'Buchung Bearbeiten',
          requiresAuth: true
        },
      },
      {
        name: 'category.bookingRecordDelete',
        path: 'booking-records/:bookingRecordId/delete',
        component: BookingRecordDelete,
        meta: {
          title: AppTitle + 'Buchung Löschen',
          requiresAuth: true
        },
      },
    ],
  },
  //CSV
  {
    name: 'importCSV',
    path: '/csv/import',
    beforeEnter: userGuard,
    components: {
      default: ImportCSV,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Kategorie Übersicht',
      requiresAuth: true
    }
  } , {
    name: 'exportCSV',
    path: '/csv/export/:accountId/:categoryId',
    beforeEnter: userGuard,
    components: {
      default: ExportCSV,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Kategorie Übersicht',
      requiresAuth: true
    }
  },
  //User Profile
  {
    name: 'userProfile',
    path: '/profile',
    beforeEnter: userGuard,
    components: {
      default: Profile,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Profile',
      requiresAuth: true
    }
  }
]
