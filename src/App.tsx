import { useState, useEffect } from 'react';

// Menu data
const menuItems = [
  {
    id: 1,
    name: "Full English Breakfast",
    price: "₦3,500",
    description: "Classic eggs, sausages, baked beans, toast, grilled tomatoes, and mushrooms. The ultimate brunch experience.",
    image: "https://images.unsplash.com/photo-1533920379810-6bed6e87e826?w=600&h=400&fit=crop",
    alt: "Full English Breakfast with eggs, sausages, and toast at Kawawa Restaurant"
  },
  {
    id: 2,
    name: "Pancake Stack",
    price: "₦2,500",
    description: "Fluffy golden pancakes topped with fresh berries, maple syrup, and whipped cream.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
    alt: "Delicious Pancake Stack with berries and maple syrup at Kawawa Restaurant"
  },
  {
    id: 3,
    name: "Jollof & Chicken",
    price: "₦3,000",
    description: "Smoky party-style jollof rice served with perfectly grilled chicken and coleslaw.",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop",
    alt: "Nigerian Jollof Rice with grilled chicken at Kawawa Restaurant"
  },
  {
    id: 4,
    name: "Avocado Toast Deluxe",
    price: "₦2,800",
    description: "Sourdough toast topped with smashed avocado, poached eggs, cherry tomatoes, and feta.",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop",
    alt: "Avocado Toast with poached eggs at Kawawa Restaurant"
  },
  {
    id: 5,
    name: "Yam & Egg Sauce",
    price: "₦2,200",
    description: "Boiled Nigerian yam served with rich egg sauce, peppers, and onions. A local favorite.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    alt: "Traditional Nigerian Yam with Egg Sauce at Kawawa Restaurant"
  },
  {
    id: 6,
    name: "French Toast Royale",
    price: "₦2,600",
    description: "Thick-cut brioche dipped in cinnamon custard, fried golden, topped with banana and Nutella.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop",
    alt: "French Toast with banana and Nutella at Kawawa Restaurant"
  },
  {
    id: 7,
    name: "Akara & Pap",
    price: "₦1,800",
    description: "Crispy bean cakes served with smooth pap (ogi), a traditional Nigerian breakfast combo.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop",
    alt: "Nigerian Akara (bean cakes) with pap at Kawawa Restaurant"
  },
  {
    id: 8,
    name: "Smoothie Bowl",
    price: "₦2,400",
    description: "Thick açaí and mango smoothie topped with granola, fresh fruits, coconut flakes, and honey.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop",
    alt: "Colorful Smoothie Bowl with fresh fruits at Kawawa Restaurant"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWhatsAppLink = (dishName?: string) => {
    const base = "https://wa.me/2348100722544";
    if (dishName) {
      const message = encodeURIComponent(`Hi Kawawa, I'd like to order ${dishName}. Please confirm availability and delivery details.`);
      return `${base}?text=${message}`;
    }
    return `${base}?text=${encodeURIComponent("Hi Kawawa, I'd like to place an order. Please share your menu and availability.")}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex flex-col">
                <span className={`text-lg md:text-xl font-extrabold uppercase tracking-tight transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
                  Kawawa Restaurant
                </span>
                <span className={`text-[10px] md:text-xs font-medium tracking-wide transition-colors ${scrolled ? 'text-brand-yellow-dark' : 'text-brand-yellow'}`}>
                  Awkuzu's Premier Brunch Spot
                </span>
              </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className={`text-sm font-medium transition-colors hover:text-brand-yellow ${scrolled ? 'text-brand-dark' : 'text-white'}`}>Menu</a>
              <a href="#why-us" className={`text-sm font-medium transition-colors hover:text-brand-yellow ${scrolled ? 'text-brand-dark' : 'text-white'}`}>Why Us</a>
              <a href="#location" className={`text-sm font-medium transition-colors hover:text-brand-yellow ${scrolled ? 'text-brand-dark' : 'text-white'}`}>Location</a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green hover:bg-brand-green-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Order via WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t animate-slide-down">
            <div className="px-4 py-4 space-y-3">
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block text-brand-dark font-medium py-2 hover:text-brand-yellow transition-colors">Menu</a>
              <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="block text-brand-dark font-medium py-2 hover:text-brand-yellow transition-colors">Why Us</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)} className="block text-brand-dark font-medium py-2 hover:text-brand-yellow transition-colors">Location</a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-brand-green text-white text-center px-5 py-3 rounded-full font-semibold transition-all"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1920&h=1080&fit=crop"
            alt="Delicious brunch spread with pancakes, eggs, and fresh coffee at Kawawa Restaurant"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-brand-yellow/90 text-brand-dark px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              ⭐ 5-Star Rated • Nkwelle, Awkuzu
            </span>
          </div>
          <h1 className="animate-fade-in-up stagger-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
            Start Your Day with the <span className="text-brand-yellow">Best Brunch</span> in Nkwelle
          </h1>
          <p className="animate-fade-in-up stagger-2 text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Rated 5-Stars. Fresh Ingredients, Great Vibes. Experience brunch like never before.
          </p>
          <div className="animate-fade-in-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow-dark text-brand-dark px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105 shadow-xl"
            >
              View Menu
            </a>
            <a
              href="#location"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-brand-dark px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105"
            >
              Find Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-brand-cream py-3 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-gray-500">
            <ol className="flex items-center space-x-2">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Home</a></li>
              <li><span className="mx-1">/</span></li>
              <li><a href="#menu" className="hover:text-brand-yellow transition-colors">Menu</a></li>
              <li><span className="mx-1">/</span></li>
              <li><a href="#location" className="hover:text-brand-yellow transition-colors">Location</a></li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Featured Menu Section */}
      <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-brand-yellow font-semibold text-sm uppercase tracking-wider mb-2">Our Menu</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
              Our Signature Brunch Items
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Handcrafted dishes made with the freshest ingredients. Order directly via WhatsApp for quick delivery.
            </p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <article
                key={item.id}
                className="menu-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-brand-yellow text-brand-dark px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
                  <a
                    href={getWhatsAppLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Order This
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 sm:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-brand-yellow font-semibold text-sm uppercase tracking-wider mb-2">Why Kawawa</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-orange-50">
              <div className="w-16 h-16 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">5-Star Rated Service</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Consistently rated 5 stars by our happy customers. We deliver excellence in every plate and every interaction.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-orange-50">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">🥬</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Fresh Daily Ingredients</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We source the freshest local ingredients daily. No shortcuts, no preservatives – just pure, wholesome food.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-orange-50">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Perfect for Weekend Plans</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether it's a family gathering or a friend meetup, our brunch sets the perfect vibe for your weekend plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-brand-yellow font-semibold text-sm uppercase tracking-wider mb-2">Find Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
              Visit Us Today
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Map & Info */}
            <div className="space-y-6">
              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 sm:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.07!2d6.95!3d6.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknMDAuMCJOIDbCsDU3JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kawawa Restaurant Location - Nkwelle, Awkuzu, Anambra"
                ></iframe>
              </div>

              {/* Address & Hours */}
              <div className="bg-brand-cream rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-yellow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Our Address</h3>
                    <p className="text-gray-500 text-sm">LOCAL, Nkwelle, Awkuzu, Anambra State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-yellow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Opening Hours</h3>
                    <p className="text-gray-500 text-sm">Open for Brunch Daily: 8:00 AM – 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-yellow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Phone / WhatsApp</h3>
                    <p className="text-gray-500 text-sm">+234 810 072 2544</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-brand-yellow to-orange-400 rounded-2xl p-8 sm:p-10 w-full text-center shadow-xl">
                <div className="text-5xl sm:text-6xl mb-6">🍳</div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
                  Ready to Order?
                </h3>
                <p className="text-brand-dark/80 mb-8 text-sm sm:text-base">
                  Skip the wait! Order your favorite brunch items directly via WhatsApp. Fast response guaranteed.
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-lg animate-pulse-glow"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Call / Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-extrabold uppercase mb-2">Kawawa Restaurant</h3>
              <p className="text-gray-400 text-sm mb-4">Awkuzu's Premier Brunch Spot – 5-Star Quality.</p>
              <p className="text-gray-400 text-sm">Fresh ingredients, great vibes, and unforgettable brunch experiences in Nkwelle.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-brand-yellow mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm">Home</a></li>
                <li><a href="#menu" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm">Menu</a></li>
                <li><a href="#why-us" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm">Why Choose Us</a></li>
                <li><a href="#location" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm">Location & Hours</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-brand-yellow mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Nkwelle, Awkuzu, Anambra
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +234 810 072 2544
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Daily: 8:00 AM – 4:00 PM
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2026 Kawawa Restaurant. All rights reserved.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float bg-brand-green hover:bg-brand-green-dark text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        aria-label="Order via WhatsApp"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
