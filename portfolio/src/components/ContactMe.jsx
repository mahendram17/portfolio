
function ContactMe() {
    return (
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto flex justify-between items-center p-8">
          {/* Left Side: Contact Information */}
          <div className="w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-4">
              aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="mb-8">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <div className="mb-4">
              <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                Support@rm.in
              </p>
            </div>
            
            <div className="mb-4">
              <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

                (+91) 9876543210
              </p>
            </div>
  
            <div>
              <p className="flex items-center">
                {/* <img src="/images/location-icon.png" alt="location" className="w-6 h-6 mr-3" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>



                Nerul, Navi Mumbai
              </p>
            </div>
          </div>
  
          {/* Right Side: Contact Form */}
          <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Message</h3>
            
            <form>
              {/* Name Field */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium" htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
                  placeholder="Your name"
                />
              </div>
  
              {/* Email Field */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium" htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
                  placeholder="Email address"
                />
              </div>
  
              {/* Message Field */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
                  placeholder="Type Message"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg hover:bg-green-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactMe;
  