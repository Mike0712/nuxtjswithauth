import {ROLES} from "@/constants";

export default [
  {
    title: 'Team',
    icon: {la: 'users'},
    allowed: {
      roles: ROLES.ADMIN
    },
    children: [
      {
        title: 'Users',
        page: 'users',
        icon: {la: 'users-cog'},
      },
      {
        title: 'Invite',
        page: '',
        icon: {la: 'door-open'}
      }
    ]
  },
  {
    title: 'Calls',
    icon: {la: 'phone'}
  }
]
