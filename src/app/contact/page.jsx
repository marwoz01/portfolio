export default function ContactPage() {
  return (
    <div className="fixed bottom-8 right-8 p-6 py-12 text-white text-right w-100">
      <h1 className="text-3xl mb-6">Contact</h1>

      <p className="text-lg mb-2">Marcel Woźniak</p>
      <p className="text-gray-300">Email: marwozniak01@gmail.com</p>
      <p className="text-gray-300 mb-6">Phone: 794-121-272</p>

      <a
        href="/cv.pdf"
        download
        className="mt-4 px-5 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition"
      >
        Download CV
      </a>
    </div>
  );
}
