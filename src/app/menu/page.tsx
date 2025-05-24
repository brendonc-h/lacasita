import { categories, menuItems } from '@/data/menu';
import Image from 'next/image';
import { FireIcon } from '@heroicons/react/24/solid';

export default function MenuPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Our Menu</h1>
          <p className="mt-4 text-lg text-gray-500">
            Discover our authentic Mexican dishes made with fresh ingredients and traditional recipes
          </p>
        </div>

        <div className="mt-16">
          {categories.map((category) => {
            const items = menuItems.filter((item) => item.category === category.id);
            if (items.length === 0) return null;

            return (
              <div key={category.id} className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.name}</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="aspect-h-3 aspect-w-4 bg-gray-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                          <p className="text-lg font-medium text-primary-600">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                        {item.spicyLevel && (
                          <div className="mt-2 flex items-center gap-1">
                            {[...Array(item.spicyLevel)].map((_, i) => (
                              <FireIcon
                                key={i}
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                        )}
                        <button
                          type="button"
                          className="mt-4 w-full rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
