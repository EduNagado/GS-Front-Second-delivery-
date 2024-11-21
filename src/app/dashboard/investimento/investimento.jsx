import { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
];

const LocationOptions = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    const locationsRef = collection(db, 'locations'); // Assuming 'locations' collection in Firestore
    const locationsSnapshots = await getDocs(query(locationsRef, orderBy('name', 'asc'), limit(5)));
    setLocations(locationsSnapshots.docs.map((location) => location.data()));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Available Locations</h2>
      <ul>
        {locations.length > 0 ? (
          locations.map((location, index) => (
            <li key={index} className="mb-3">
              <div className="text-lg font-medium">Location: {location.name}</div>
              <p className="text-sm text-gray-700">Country: {location.country}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No locations available.</li>
        )}
      </ul>
    </div>
  );
};

const Investments = () => {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    const investmentsRef = collection(db, 'investments');
    const investmentsSnapshots = await getDocs(query(investmentsRef, orderBy('date', 'desc'), limit(5)));
    setInvestments(investmentsSnapshots.docs.map(investment => investment.data()));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Investments Overview</h2>
      <ul>
        {investments.length > 0 ? (
          investments.map((investment, index) => (
            <li key={index} className="mb-3">
              <div className="text-lg font-medium">Investment: {investment.type}</div>
              <p className="text-sm text-gray-700">Amount: ${investment.amount}</p>
              <p className="text-xs text-gray-500">Date: {new Date(investment.date?.seconds * 1000).toLocaleDateString()}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No investments available.</li>
        )}
      </ul>
    </div>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const PricingSection = () => {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-600 sm:text-xl">
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
            <p className="mt-4 text-gray-500">{tier.description}</p>
            <p className="mt-4 text-3xl font-bold text-gray-900">{tier.priceMonthly}</p>
            <ul role="list" className="mt-6 space-y-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex space-x-3">
                  <CheckIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                  <span className="text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              className="mt-8 block text-center text-base font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardInvestimento = () => {
  return (
    <div>
      <Investments />
      <PricingSection />
      <LocationOptions />
    </div>
  );
};

export default DashboardInvestimento;
