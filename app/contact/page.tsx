export default function Home() {
  return (
<div className="h-screen flex items-center justify-center">
  <div className=" p-8 rounded-lg shadow-lg max-w-md w-full">
    <h1 className="text-2xl font-bold text-center mb-6">Contact Me</h1>
    <div className="space-y-4">
      <a 
        href="https://www.linkedin.com/in/david-deng-48432024b/" 
        className="block w-full text-center p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a 
        href="https://ctnsr.dev" 
        className="block w-full text-center p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website (You&apos;re on it right now!)
      </a>
      <a 
        className="block w-full text-center p-3 bg-purple-500 text-white rounded-lg transition"
      >
        ddavid2022.dt [at] gmail [dot] com
      </a>
      <a 
        href="https://github.com/ddenglts" 
        className="block w-full text-center p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
</div>
  );
}
