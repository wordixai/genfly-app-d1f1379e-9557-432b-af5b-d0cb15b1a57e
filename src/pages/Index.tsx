import { Coffee, Clock, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Index = () => {
  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich and aromatic single shot' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk foam' },
    { name: 'Avocado Toast', price: '$8.50', description: 'Sourdough with avocado, cherry tomatoes' },
    { name: 'Blueberry Pancakes', price: '$9.00', description: 'Fluffy pancakes with fresh blueberries' }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Brew & Bites</h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8">Artisanal coffee & fresh eats in the heart of the city</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Founded in 2010, Brew & Bites started as a small coffee cart and has grown into a beloved neighborhood cafe. 
            We source our beans directly from sustainable farms and bake all our pastries in-house daily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="text-xl font-bold text-amber-900 mb-2">Premium Coffee</h3>
            <p className="text-amber-700">Ethically sourced beans roasted to perfection</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="text-xl font-bold text-amber-900 mb-2">Open Daily</h3>
            <p className="text-amber-700">7am - 7pm weekdays, 8am - 6pm weekends</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="text-xl font-bold text-amber-900 mb-2">Central Location</h3>
            <p className="text-amber-700">123 Main Street, Downtown</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-amber-100 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-amber-800 max-w-3xl mx-auto">
              Seasonal offerings made with locally-sourced ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
                <p className="text-amber-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brew & Bites</h3>
            <p>123 Main Street<br />Downtown, City 10001</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p>Monday - Friday: 7am - 7pm<br />Saturday - Sunday: 8am - 6pm</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-300 transition"><Instagram /></a>
              <a href="#" className="hover:text-amber-300 transition"><Facebook /></a>
              <a href="#" className="hover:text-amber-300 transition"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-amber-800 text-center">
          <p>&copy; {new Date().getFullYear()} Brew & Bites. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;