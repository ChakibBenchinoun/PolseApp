import type {MetaFunction} from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import styles from './styles/app.css'

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

const navigation = [
  {name: 'Features', to: '/features'},
  {name: 'Customer Stories', to: '/customer-stories'},
  {name: 'Pricing', to: '/pricing'},
  {name: 'Blog', to: '/blog'},
]

const footerLinks = [
  {
    section: 'product',
    links: ['Features', 'Pricing', 'Sign Up'],
  },
  {
    section: 'company',
    links: ['Customer Stories', 'About', 'Contact'],
  },
  {
    section: 'resource',
    links: ['Support', 'Blog'],
  },
]

export default function App() {
  return (
    <Document title="Pulse (Practice)">
      <Layout />
      <Outlet />
      <Footer />
    </Document>
  )
}
function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="bg-bgPrimaryColor h-screen">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

function Layout() {
  return (
    <div className="flex justify-between py-14 max-w-6xl mx-auto">
      <Link to="/">
        <img
          className="inline-block"
          src="https://pulseapp.com/img/pulse-logo.svg"
          alt=""
        />
      </Link>
      <div className="flex items-center">
        {navigation.map(link => (
          <NavLink
            className="text-primary font-bold mr-10 hover:text-textColor"
            key={link.name}
            to={link.to}
          >
            {({isActive}) =>
              isActive ? (
                <span className="text-textColor">{link.name}</span>
              ) : (
                link.name
              )
            }
          </NavLink>
        ))}
        <Link
          className="text-primary font-bold border-2 hover:shadow-button hover:translate-x-1 hover:-translate-y-1 border-primary px-5 py-1"
          to="/"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="bg-black w-full left-0 absolute">
      <div className="pt-20 max-w-6xl mx-auto">
        <div className="flex">
          <div className="w-1/2">
            <Link className="h-full w-full" to="/">
              <img src="https://pulseapp.com/img/pulse-logo.svg" alt="" />
            </Link>
            <button className="bg-gradient-to-r from-[#00ab6a] to-[#23ea76] py-4 px-8 font-bold tracking-wider mt-14">
              Sign Up for a 30-Day Trial
            </button>
          </div>
          <div className="grid grid-cols-3 gap-16">
            {footerLinks.map(col => (
              <div className="flex flex-col" key={col.section}>
                <h1 className="text-white font-extrabold capitalize tracking-wider">
                  {col.section}
                </h1>
                {col.links.map(link => (
                  <Link
                    className="text-primary mt-5 font-bold"
                    key={link}
                    to="/"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 mb-4 max-w-lg">
          <p className="text-gray-500 text-xs">
            ©2019 Pulseapp.com, Inc. All Rights Reserved |{' '}
            <Link to="/">Terms of Use</Link> |{' '}
            <Link to="/">Privacy Policy</Link> | <Link to="/">EU Privacy</Link>{' '}
            Pulse is made by
            <Link to="/">Simple Focus</Link>. We also make
            <Link to="/">Ballpark</Link>, <Link to="/">Sifter</Link>, and{' '}
            <Link to="/">Curated</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
