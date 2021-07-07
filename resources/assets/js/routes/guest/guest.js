import {AppTitle} from '../../utility/config';
import guestGuard from '../guard/guestGuard'

//Header
const DefaultHeader = () => import('../../components/partials/Header/DefaultHeader');

//Footer
const DefaultFooter = () => import('../../components/partials/Footer/DefaultFooter');
const PageNotFound = () => import('../../components/partials/Error/PageNotFound');


//Guest Routes - Gäste Routes
const Home = () => import('../../components/guest/Home');
const AGBs = () => import('../../components/guest/AGBs');
const Price = () => import('../../components/order/Price');
const Privacy = () => import('../../components/guest/Privacy');
const Imprint = () => import('../../components/guest/Imprint');
const SignIn = () => import('../../components/auth/SignIn');
const SignUp = () => import('../../components/auth/SignUp');
const PasswordReset = () => import('../../components/auth/PasswordReset');
const ForgotPassword = () => import('../../components/auth/ForgotPassword');


//Guest and Global Routes
export default [
  {
    name: 'home',
    path: '/',
    beforeEnter:guestGuard,
    components: {
      default: Home,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Home',
    },
  },
  //Partner Key Hoem
  {
    name: 'homePartnerKey',
    path: '/sk/:partnerKey',
    // beforeEnter:guestGuard,
    components: {
      default: Home,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Home',
    },
  }, {
    name: 'signin',
    path: '/signin',
    beforeEnter:guestGuard,
    components: {
      default: SignIn,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Login',
    },
  }, {
    name: 'signup',
    path: '/signup',
    beforeEnter:guestGuard,
    components: {
      default: SignUp,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Registrieren',
    },
  },{
    name: 'forgotPassword',
    path: '/forgot-password/',
    beforeEnter:guestGuard,
    components: {
      default: ForgotPassword,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Passwort Vergessen',
    },
  },{
    name: 'passwordReset',
    path: '/reset-password/:token',
    beforeEnter:guestGuard,
    components: {
      default: PasswordReset,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Passwort Reset',
    },
  },{
    name: 'price',
    path: '/price/',
    components: {
      default: Price,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Pakets',
    },
  },{
    name: 'agbs',
    path: '/agbs',
    components: {
      default: AGBs,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'AGBs',
    },
  },{
    name: 'inprint',
    path: '/inprint',
    components: {
      default: Imprint,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Impressum',
    },
  },{
    name: 'privacy',
    path: '/privacy',
    components: {
      default: Privacy,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Datenschutz',
    },
  },
  {
    name: '404',
    path: '*',
    beforeEnter:guestGuard,
    components: {
      default: PageNotFound,
      header: DefaultHeader,
      footer: DefaultFooter,
    }, meta: {
      title: AppTitle + 'Seite nicht Gefunden!',
    },
  },
]
