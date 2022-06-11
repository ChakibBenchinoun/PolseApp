import type {LoaderFunction} from '@remix-run/node'
import {Link, useLoaderData} from '@remix-run/react'
import CheckIcon from '~/components/icons/check-icon'
import {type AskedQuestion, getAskedQuestions} from '~/utils/FAQ'

type LoaderData = {askedQuestions: AskedQuestion}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {askedQuestions: getAskedQuestions()}
  return data
}

export default function Pricing() {
  const {askedQuestions} = useLoaderData<LoaderData>()
  return (
    <>
      <div className="max-w-6xl mx-auto mt-10 md:mt-0">
        <div className="max-w-2xl lg:max-w-xl lg:mx-auto">
          <h1 className="text-6xl font-bold text-left lg:text-center lg:px-10 px-5">
            Try Pulse free for 30 days.
          </h1>
          <p className="text-lg text-left lg:text-center tracking-wider mt-4 px-5">
            See why Pulse is the best way to monitor your cash flow. Sign up for
            any plan and try Pulse absolutely free for 30 days.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-6 lg:mt-20 px-5 items-center lg:grid lg:grid-cols-3 lg:px-0">
          <div className="px-1 lg:px-10 lg:py-5">
            <p className="text-xl text-primary font-bold">
              These are what we call the Pulse Basics. They’re what every
              customer gets.
            </p>
            <ul className="list-disc list-outside lg:pl-4 pl-10 mt-4">
              <li className="mt-1 font-light tracking-wide text-gray-600">
                Manage cash flow on a daily, weekly, monthly, or yearly basis
              </li>
              <li className="mt-1 font-light tracking-wide text-gray-600">
                Forecast growth with recurring income or expenses that scale
                automatically
              </li>
              <li className="mt-1 font-light tracking-wide text-gray-600">
                Works with any currency
              </li>
              <li className="mt-1 font-light tracking-wide text-gray-600">
                See Money In and Money Out, categorize transactions, and run
                helpful reports
              </li>
              <li className="mt-1 font-light tracking-wide text-gray-600">
                Toggle entries and accounts on and off to game out different
                scenarios
              </li>
            </ul>
            <p className="lg:mt-4 my-8 text-gray-500">
              Just need the Pulse Basics?
              <br />
              <Link className="text-textColor underline" to="/">
                Get them now
              </Link>{' '}
              for $29 per month.
            </p>
          </div>
          <div className="border-2 border-primary rounded-md bg-white h-full">
            <p className="text-center text-xs tracking-wider text-white py-[2px] bg-primary uppercase">
              recommended
            </p>
            <div className="flex flex-col items-center p-7">
              <h1 className="text-5xl text-primary text-center font-bold px-5">
                Small Business Plan
              </h1>
              <p className="text-2xl text-gray-400 mt-2">$59 per month</p>
              <button className="bg-button text-xl px-7 py-3 rounded-sm mt-5 font-bold tracking-wider hover:scale-110 transition duration-100">
                Sign Up Now
              </button>
              <p className="text-xs uppercase font-extrabold tracking-wider mt-7 text-gray-500">
                You get Pulse Basics, plus:
              </p>
              <div className="mt-2 px-2">
                <p className="mb-4 font-light text-gray-500">
                  <CheckIcon className="inline-block -ml-7 text-primary" />{' '}
                  Manage cash flow across multiple financial accounts
                </p>
                <p className="mb-4 font-light text-gray-500">
                  <CheckIcon className="inline-block -ml-7 text-primary" />{' '}
                  Invite your investors, book keeper, or management team to see
                  reports or manage cash flow
                </p>
                <p className="mb-4 font-light text-gray-500">
                  <CheckIcon className="inline-block -ml-7 text-primary" />
                  Integrate with QuickBooks Online for more accurate cash flow
                </p>
                <p className="mb-4 font-light text-gray-500">
                  <CheckIcon className="inline-block -ml-7 text-primary" />{' '}
                  Track your actual cash flow alongside your projected cash flow
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-md bg-white">
            <p className="text-center font-extralight tracking-wider bg-gray-100 text-textColor text-xs px-9 py-5">
              Complex business with multiple financial accounts, currencies, or
              auditing needs?
            </p>
            <div className="flex flex-col items-center p-7">
              <h1 className="text-4xl text-primary tracking-wide text-center font-light px-5">
                Unlock Extra Features
              </h1>
              <p className="text-2xl text-gray-400 mt-2">$89 per month</p>
              <button className="bg-button text-xl px-7 py-3 rounded-sm mt-5 font-bold tracking-wider hover:scale-110 transition duration-100">
                Try Premium
              </button>
              <p className="text-xs uppercase font-extrabold tracking-wider mt-7 text-gray-500">
                Get it all, plus:
              </p>
              <div className="mt-2 px-2">
                <p className="mb-4 font-light text-gray-500">
                  Manage cash flow across unlimited financial accounts
                </p>
                <p className="mb-4 font-light text-gray-500">
                  Convert to any currency for localized cash flow reporting and
                  projections
                </p>
                <p className="mb-4 font-light text-gray-500">
                  Attach invoices or contracts to your cash flow entries for
                  accountability and auditing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 max-w-4xl mx-auto">
          <img
            className="mx-auto"
            src="https://pulseapp.com/img/subvert-avatar.png"
            alt=""
          />
          <p className="text-center text-2xl font-light tracking-widest px-3 mt-4 leading-9">
            “Pulse is worth every penny because it empowers business owners with
            critical financial insight and knowledge.”
          </p>
          <p className="text-center mt-4 text-xs text-primary font-bold">
            SUBVERT MARKETING, INC.
          </p>
        </div>
      </div>
      <div className="bg-white w-full left-0 border-t-2 mt-20 px-5 lg:px-0">
        <div className="max-w-6xl mx-auto py-20">
          <h1 className="text-5xl font-bold">FAQ</h1>
          <div className="grid md:grid-cols-2 mt-6 lg:gap-10 gap-3">
            {askedQuestions.map(question => (
              <div className="md:py-6 py-2" key={question.question}>
                <p className="text-xl font-bold">{question.question}</p>
                <p className="text-lg text-gray-500">{question.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
