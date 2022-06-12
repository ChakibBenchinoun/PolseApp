export type Plan = {
  id: number
  Header: string
  price: string
  deal: string
  offers: string[]
}[]

const plans: Plan = [
  {
    id: 1,
    Header:
      'These are what we call the Pulse Basics. They’re what every customer gets.',
    price: '$29 per month',
    deal: 'Just need the Pulse Basics?',
    offers: [
      'Manage cash flow on a daily, weekly, monthly, or yearly basis',
      'Forecast growth with recurring income or expenses that scale automatically',
      'Works with any currency',
      'See Money In and Money Out, categorize transactions, and run helpful reports',
      'Toggle entries and accounts on and off to game out different scenarios',
    ],
  },
  {
    id: 2,
    Header: 'Small Business Plan',
    price: '$59 per month',
    deal: 'You get Pulse Basics',
    offers: [
      'Manage cash flow across multiple financial accounts',
      'Invite your investors, book keeper, or management team to see reports or manage cash flow',
      'Integrate with QuickBooks Online for more accurate cash flow',
      'Track your actual cash flow alongside your projected cash flow',
    ],
  },
  {
    id: 3,
    Header: 'Unlock Extra Features',
    price: '$89 per month',
    deal: 'Get it all',
    offers: [
      'Manage cash flow across unlimited financial accounts',
      'Convert to any currency for localized cash flow reporting and projections',
      'Attach invoices or contracts to your cash flow entries for accountability and auditing',
    ],
  },
]

export function getPlans() {
  return plans
}
