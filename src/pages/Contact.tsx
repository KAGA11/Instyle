import location from '../assets/location.png';

function Contact() {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">Contact</h1>
            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold">Address:</span> Gao'erfu Road No.558, Fuyang District, Hangzhou, Zhejiang China
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> DavidYu@123.com
              </p>
            </div>
          </div>

          <div className="flex-1">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={location}
              alt="Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;