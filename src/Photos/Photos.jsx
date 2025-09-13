export function Photos() {
    const products = [
      {
        id: 1,
        name: "spare",
        image: "/pic1.jpg",
      },
      {
        id: 2,
        name: "spare",
        image: "/pic2.jpg",
      },
      {
        id: 3,
        name: "spare",
        image: "/pic3.jpg",
      },
      {
        id: 4,
        name: "spare",
        image: "/pic4.jpg",
      },
    ]
  
    return (
      <section className="py-16 px-4 max-w-4xl mx-auto" id="products">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">صور متفرقة</h2>
          <p className="text-muted-foreground text-lg text-pretty">
            صور من شركتنا
          </p>
        </div>
  
        <div className="flex flex-col gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center group">
              <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  