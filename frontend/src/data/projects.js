export const projects = [
  {
    slug: 'zapshift-delivery',
    title: 'ZapShift',
    category: 'Parcel delivery platform',
    summary:
      'A multi-role delivery platform for booking, paying for, managing, and tracking parcels.',
    description:
      'ZapShift brings the parcel journey into one responsive product. Customers can create deliveries, review calculated charges, manage parcels, make payments, and follow tracking details, while administrators manage users, riders, payments, and delivery records from role-aware dashboards.',
    stack: [
      'React',
      'Tailwind CSS',
      'Firebase',
      'TanStack Query',
      'REST API',
      'Leaflet',
    ],
    result: 'Parcel booking + role-based operations',
    color: 'from-sky-400/30 via-blue-500/15 to-transparent',
    liveUrl: 'https://zap-shift-app.vercel.app/',
    repositoryUrl: 'https://github.com/Antor-Adhikary1216/zap-shift.app',
    highlights: [
      'Route- and weight-aware delivery pricing',
      'Role-based user and administrator dashboards',
      'Payment, parcel status, and tracking workflows',
      'Responsive coverage and location experiences',
    ],
  },
  {
    slug: 'blog-india',
    title: 'Blog India',
    category: 'Editorial publishing platform',
    summary:
      'A full-stack editorial platform for discovering, publishing, and discussing articles.',
    description:
      'Blog India combines a responsive reading experience with secure account features and an administrator publishing workflow. Readers can explore articles and join authenticated discussions, while administrators can create, edit, feature, publish, and manage editorial content.',
    stack: [
      'React',
      'Tailwind CSS',
      'Express',
      'MongoDB',
      'Firebase',
      'Node.js',
    ],
    result: 'Editorial experience + publishing tools',
    color: 'from-violet-400/30 via-fuchsia-500/15 to-transparent',
    liveUrl: 'https://blog-wrbsite.onrender.com/',
    repositoryUrl: 'https://github.com/Antor-Adhikary1216/blog-wrbsite',
    highlights: [
      'Public article listings and dynamic story pages',
      'Firebase authentication with protected account routes',
      'Authenticated reader comments and discussions',
      'Administrator create, edit, draft, and publishing workflows',
    ],
  },
  {
    slug: 'fashion-photos',
    title: 'Fashion Photos',
    category: 'Photography portfolio platform',
    summary:
      'A cinematic full-stack portfolio for presenting photography, managing content, and receiving bookings.',
    description:
      'Fashion Photos gives photographers and creative studios a polished way to showcase photos, albums, services, testimonials, and editorial stories. Its secure application layer supports client accounts and booking requests, while administrators manage media and site content through a protected dashboard.',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Express',
      'MongoDB',
      'Cloudinary',
    ],
    result: 'Visual portfolio + content operations',
    color: 'from-rose-400/30 via-amber-300/15 to-transparent',
    liveUrl: 'https://fashion-photos.vercel.app/',
    repositoryUrl: 'https://github.com/Antor-Adhikary1216/Fashion-Photos',
    highlights: [
      'Cinematic galleries, albums, and lightbox viewing',
      'Booking requests, services, testimonials, and editorial stories',
      'JWT authentication with email verification and MFA',
      'Protected administration and Cloudinary photo uploads',
    ],
  },
  {
    slug: 'dragon-news',
    title: 'Dragon News',
    category: 'Digital news portal',
    summary:
      'A responsive news experience for browsing category-based stories and reading protected article details.',
    description:
      'Dragon News organizes articles into a familiar editorial layout with category navigation, latest stories, ratings, view counts, and clear author information. Firebase authentication supports registration and sign-in, while protected routing keeps full article details available to authenticated readers.',
    stack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'DaisyUI',
      'Firebase',
      'React Router',
    ],
    result: 'News discovery + protected reading',
    color: 'from-red-400/30 via-orange-300/15 to-transparent',
    liveUrl: 'https://boisterous-naiad-2a9beb.netlify.app/',
    repositoryUrl: 'https://github.com/Antor-Adhikary1216/Dragon-News.com-',
    highlights: [
      'Category-based and today\'s-pick news filtering',
      'Article cards with author, rating, views, and publishing details',
      'Firebase registration, sign-in, profile updates, and logout',
      'Protected full-story pages with authenticated routing',
    ],
  },
]

export function findProject(slug) {
  return projects.find((project) => project.slug === slug)
}
