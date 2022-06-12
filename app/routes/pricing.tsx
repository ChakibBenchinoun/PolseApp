import type {LoaderFunction} from '@remix-run/node'
import {Link, useLoaderData} from '@remix-run/react'
import {type AskedQuestion, getAskedQuestions} from '~/utils/FAQ'
import {type Plan, getPlans} from '~/utils/plans'
import CheckIcon from '~/components/icons/check-icon'

type LoaderData = {askedQuestions: AskedQuestion; plans: Plan}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    askedQuestions: getAskedQuestions(),
    plans: getPlans(),
  }
  return data
}

export default function Pricing() {
  const {askedQuestions, plans} = useLoaderData<LoaderData>()
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
          {plans.map(plan =>
            plan.id === 1 ? (
              <div className="px-1 lg:px-10 lg:py-5">
                <p className="text-xl text-primary font-bold">{plan.Header}</p>
                <ul className="list-disc list-outside lg:pl-4 pl-10 mt-4">
                  {plan.offers.map(offer => (
                    <li
                      key={offer}
                      className="mt-1 font-light tracking-wide text-gray-600"
                    >
                      {offer}
                    </li>
                  ))}
                </ul>
                <p className="lg:mt-4 my-8 text-gray-500">
                  {plan.deal}
                  <br />
                  <Link className="text-textColor underline" to="/">
                    Get them now
                  </Link>{' '}
                  for {plan.price}.
                </p>
              </div>
            ) : plan.id === 2 ? (
              <div className="border-2 border-primary rounded-md bg-white h-full">
                <p className="text-center text-xs tracking-wider text-white py-[2px] bg-primary uppercase">
                  recommended
                </p>
                <div className="flex flex-col items-center p-7">
                  <h1 className="text-5xl text-primary text-center font-bold px-5">
                    {plan.Header}
                  </h1>
                  <p className="text-2xl text-gray-400 mt-2">$59 per month</p>
                  <button className="bg-button text-xl px-7 py-3 rounded-sm mt-5 font-bold tracking-wider hover:scale-110 transition duration-100">
                    Sign Up Now
                  </button>
                  <p className="text-xs uppercase font-extrabold tracking-wider mt-7 text-gray-500">
                    {plan.deal}, plus:
                  </p>
                  <div className="mt-2 px-2">
                    {plan.offers.map(offer => (
                      <p key={offer} className="mb-4 font-light text-gray-500">
                        <CheckIcon className="inline-block -ml-7 text-primary" />{' '}
                        {offer}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : plan.id === 3 ? (
              <div className="border-2 border-gray-200 rounded-md bg-white mt-7 lg:mt-0">
                <p className="text-center font-extralight tracking-wider bg-gray-100 text-textColor text-xs px-9 py-5">
                  Complex business with multiple financial accounts, currencies,
                  or auditing needs?
                </p>
                <div className="flex flex-col items-center p-7">
                  <h1 className="text-4xl text-primary tracking-wide text-center font-light px-5">
                    {plan.Header}
                  </h1>
                  <p className="text-2xl text-gray-400 mt-2">$89 per month</p>
                  <button className="bg-button text-xl px-7 py-3 rounded-sm mt-5 font-bold tracking-wider hover:scale-110 transition duration-100">
                    Try Premium
                  </button>
                  <p className="text-xs uppercase font-extrabold tracking-wider mt-7 text-gray-500">
                    {plan.deal}, plus:
                  </p>
                  <div className="mt-2 px-2">
                    {plan.offers.map(offer => (
                      <p key={offer} className="mb-4 font-light text-gray-500">
                        <CheckIcon className="inline-block -ml-7 text-primary" />{' '}
                        {offer}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : null,
          )}
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
      <div className="bg-white w-full left-0 border-t-2 mt-20 px-5">
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
