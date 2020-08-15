import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'ADMINISTRADOR',
    group: true,
  },
  {
    title: 'Resumen',
    icon: 'calendar-outline',
    home: true,
    link: '/pages/admin/dashboard-admin',
  },
  {
    title: 'Mant. Usuarios',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'Agregar Usuario',
        link: '/pages/admin/usuarios/agregarusuario',
      },
      {
        title: 'Modificar Usuario',
        link: '/pages/admin/usuarios/modificarusuario',
      },

    ],
  },
  {
    title: 'Mant. Contratos',
    icon: 'person-outline',
    children: [
      {
        title: 'Agregar Contrato',
        link: '/pages/admin/contratos/agregarcontrato',
      },
      {
        title: 'Modificar Contrato',
        link: '/pages/admin/contratos/modificarcontrato',
      },
    ],
  },
  {
    title: 'USUARIOS',
    group: true,
  },
  {
    title: 'Principal',
    icon: 'book-outline',
    link: '/pages/user/principalusuarios',
  },
  {
    title: 'Contratos',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'Agregar Contrato',
        link: '/pages/user/contratos/agregarcontrato',
      },
      {
        title: 'Modificar Contrato',
        link: '/pages/user/contratos/modificarcontrato',
      },
    ],
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
