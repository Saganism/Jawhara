export function Footer() {

  const location = "https://maps.google.com/maps?q=33.345778, 44.402944&z=15&output=embed"

    return (
      <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-semibold mb-2">شركة جوهرة المراح</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-300 mb-1">للتواصل:</p>
          <div className="flex flex-col gap-1 text-sm">
            <p className="text-white hover:text-gray-300 transition-colors">
              07901373769
            </p>
            <p className="text-white hover:text-gray-300 transition-colors">
              07716661154
            </p>
            <p className="text-white hover:text-gray-300 transition-colors">
              07712918967
            </p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-300 mb-2">الموقع:</p>
          <div className="flex justify-center">
            <iframe
              src={location}
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
        <p className="text-sm text-gray-300">© 2025 جميع الحقوق محفوظة</p>
      </div>
    </footer>
    )
  }
