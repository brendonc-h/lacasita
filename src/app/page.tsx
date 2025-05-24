import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Mexican food spread"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to La Casita
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Experience authentic Mexican cuisine in the heart of Berthoud, Colorado
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link
                href="/menu"
                className="rounded-md bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-500"
              >
                View Menu
              </Link>
              <Link
                href="/order"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-primary-600 shadow-sm hover:bg-gray-100"
              >
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Fresh Ingredients</h3>
              <p className="mt-4 text-gray-500">
                We use only the freshest ingredients to create authentic Mexican flavors.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Family Recipes</h3>
              <p className="mt-4 text-gray-500">
                Traditional recipes passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Online Ordering</h3>
              <p className="mt-4 text-gray-500">
                Easy online ordering for pickup or delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
