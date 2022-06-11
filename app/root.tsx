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
import clsx from 'clsx'
import {motion} from 'framer-motion'
import React from 'react'
import MenuIcon from './components/icons/menu-icon'
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
  const [showMenu, setShowMenu] = React.useState(false)
  const ulVariants = {
    open: {
      transition: {staggerChildren: 0.07, delayChildren: 0.2},
    },
    closed: {
      transition: {staggerChildren: 0.05, staggerDirection: -2},
    },
  }
  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: -50,
      opacity: 0,
    },
  }
  return (
    <>
      <div className="md:hidden">
        <div className="bg-white border-b-2 p-5 flex items-center justify-between">
          <img
            className="inline-block"
            src="https://pulseapp.com/img/pulse-logo.svg"
            alt=""
          />
          <button onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon className="text-primary w-16 h-10" />
          </button>
        </div>
        <motion.div initial={false} animate={showMenu ? 'open' : 'closed'}>
          <div className={clsx(showMenu ? 'block' : 'hidden', 'h-screen')}>
            <motion.ul variants={ulVariants} className="py-8 px-6">
              {navigation
                .concat([
                  {name: 'Contact', to: '/contact'},
                  {name: 'Support', to: '/support'},
                ])
                .map(item => (
                  <motion.li
                    variants={liVariants}
                    whileHover={{scale: 1.1, x: 20}}
                    whileTap={{scale: 0.95}}
                    key={item.name}
                    className="mb-3"
                  >
                    <Link
                      to={item.to}
                      className="text-4xl text-primary font-bold"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              <motion.button
                variants={liVariants}
                className="bg-gradient-to-r from-[#00ab6a] to-[#23ea76] py-4 px-8 font-bold tracking-wider mt-5 "
              >
                Sign Up for a 30-Day Trial
              </motion.button>
            </motion.ul>
          </div>
        </motion.div>
      </div>
      <div className="md:flex justify-between py-14 max-w-6xl mx-auto px-5 hidden">
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
    </>
  )
}

function Footer() {
  return (
    <div className="bg-black w-full left-0 absolute overflow-hidden">
      <div className="pt-20 max-w-6xl mx-auto">
        <div className="lg:flex block">
          <div className="lg:w-1/2 w-full lg:ml-5 xl:ml-0 px-6 lg:px-0 flex flex-col items-center lg:block">
            <Link className="h-full lg:w-full" to="/">
              <img src="https://pulseapp.com/img/pulse-logo.svg" alt="" />
            </Link>
            <button className="bg-gradient-to-r from-[#00ab6a] to-[#23ea76] py-4 px-8 font-bold tracking-wider lg:mt-14 mt-5 w-full lg:w-fit">
              Sign Up for a 30-Day Trial
            </button>
          </div>
          <div className="grid grid-cols-3 gap-16 mt-8 lg:mt-0 px-6 lg:px-0">
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
        <div className="lg:mt-20 my-10 lg:mb-4 px-5 lg:px-0 max-w-lg">
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
