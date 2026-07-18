const baseProps = {
  fill: 'none',
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
}

function Icon({ children, className = '', strokeWidth = 1.6, ...props }) {
  return (
    <svg
      {...baseProps}
      {...props}
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {children}
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </Icon>
  )
}

export function ArrowUpRightIcon(props) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Icon>
  )
}

export function DownloadIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 4v11" />
      <path d="m8 11 4 4 4-4" />
      <path d="M5 20h14" />
    </Icon>
  )
}

export function MailIcon(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m5 8 7 5 7-5" />
    </Icon>
  )
}

export function GithubIcon(props) {
  return (
    <svg {...baseProps} {...props} fill="currentColor">
      <path d="M12 2.4a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7.9.7 1.8V21c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.4Z" />
    </svg>
  )
}

export function LinkedinIcon(props) {
  return (
    <svg {...baseProps} {...props} fill="currentColor">
      <path d="M6.7 8.5H3.5V19h3.2V8.5ZM5.1 3a1.9 1.9 0 1 0 0 3.8A1.9 1.9 0 0 0 5.1 3ZM20.5 13c0-3.2-1.7-4.8-4.1-4.8-1.9 0-2.7 1-3.2 1.8V8.5H10V19h3.2v-5.2c0-1.4.3-2.8 2.1-2.8 1.7 0 1.8 1.6 1.8 2.9V19h3.2l.2-6Z" />
    </svg>
  )
}
