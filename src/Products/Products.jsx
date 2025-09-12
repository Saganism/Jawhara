export function Products() {
    const products = [
      {
        id: 1,
        name: "Enterprise Analytics Platform",
        image: "/modern-analytics-dashboard-interface.jpg",
        description: "Advanced data visualization and business intelligence tools for enterprise-level decision making.",
      },
      {
        id: 2,
        name: "Cloud Security Suite",
        image: "/cybersecurity-shield-and-cloud-protection.jpg",
        description: "Comprehensive security solutions protecting your digital infrastructure from modern threats.",
      },
      {
        id: 3,
        name: "AI-Powered CRM",
        image: "/artificial-intelligence-customer-relationship-mana.jpg",
        description: "Intelligent customer relationship management with predictive analytics and automation.",
      },
      {
        id: 4,
        name: "Mobile Development Kit",
        image: "/mobile-app-development-tools-and-code.jpg",
        description: "Complete toolkit for building cross-platform mobile applications with native performance.",
      },
      {
        id: 5,
        name: "Blockchain Infrastructure",
        image: "/blockchain-network-and-cryptocurrency-technology.jpg",
        description: "Scalable blockchain solutions for secure transactions and decentralized applications.",
      },
      {
        id: 6,
        name: "IoT Management Console",
        image: "/internet-of-things-devices-and-monitoring-dashboar.jpg",
      },
      {
        id: 7,
        name: "Quantum Computing API",
        image: "/quantum-computer-and-advanced-computing-technology.jpg",
        description: "Access to quantum computing resources through our developer-friendly API platform.",
      },
    ]
  
    return (
      <section className="py-16 px-4 max-w-4xl mx-auto" id="products">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">منتجاتنا</h2>
          <p className="text-muted-foreground text-lg text-pretty">
            أدواتنا الاحتياطية من شركتي رينو وفولفو
          </p>
        </div>
  
        <div className="flex flex-col gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center group">
              <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
                <img src={"/spare.jpg"} alt={product.name} className="w-full h-48 object-cover" />
              </div>
              {/* <div className="mt-4 max-w-md">
                <h3 className="text-xl font-semibold text-foreground mb-2 text-balance">{product.name}</h3>
                {product.description && (
                  <p className="text-muted-foreground text-pretty leading-relaxed">{product.description}</p>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </section>
    )
  }
  