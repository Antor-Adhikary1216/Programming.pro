export const projects = [
  {
    slug: 'flowdesk-commerce',
    title: 'Flowdesk Commerce',
    category: 'Commerce platform',
    summary: 'A storefront and operations system designed around fast buying and clear fulfillment.',
    description: 'Flowdesk connects a responsive product experience with inventory-aware APIs, secure checkout flows, and an operational dashboard for the team behind the store.',
    stack: ['React', 'Express', 'MongoDB', 'Stripe'],
    result: 'Customer journey + operations',
    color: 'from-mint/30 via-aqua/10 to-transparent',
  },
  {
    slug: 'relay-workspace',
    title: 'Relay Workspace',
    category: 'SaaS collaboration',
    summary: 'A role-aware workspace that turns projects, conversations, and activity into one calm workflow.',
    description: 'Relay combines an accessible React interface, protected Express routes, flexible permissions, and real-time activity patterns into a focused collaboration product.',
    stack: ['React', 'Node.js', 'JWT', 'Socket.IO'],
    result: 'Product UI + platform API',
    color: 'from-lime/25 via-emerald-400/10 to-transparent',
  },
  {
    slug: 'northstar-analytics',
    title: 'Northstar Analytics',
    category: 'Data product',
    summary: 'A reporting workspace that makes complex operational data readable and actionable.',
    description: 'Northstar transforms aggregated service data into responsive dashboards with clear filtering, reusable chart patterns, and reliable export workflows.',
    stack: ['React', 'REST API', 'MongoDB', 'Recharts'],
    result: 'Data layer + dashboard',
    color: 'from-aqua/30 via-cyan-500/10 to-transparent',
  },
  {
    slug: 'carelink-booking',
    title: 'CareLink Booking',
    category: 'Service marketplace',
    summary: 'A scheduling product with availability, bookings, account management, and clear status updates.',
    description: 'CareLink is an end-to-end booking flow with server-side validation, transactional state changes, customer accounts, and a responsive administrative surface.',
    stack: ['React Router', 'Express', 'Mongoose', 'Email'],
    result: 'Booking flow + admin tools',
    color: 'from-ember/25 via-orange-400/10 to-transparent',
  },
]

export function findProject(slug) {
  return projects.find((project) => project.slug === slug)
}
