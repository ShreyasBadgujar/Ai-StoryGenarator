// import React from 'react'

// const Contact = () => {
//   return (

//     <div className="p-4 max-w-md mx-auto h-full ">
      
//       <h1 className="text-2xl font-bold mb-4">Contact Information</h1>

//       <form>
//         <div className="grid gap-6 mb-6 md:grid-cols-2">
//           <div>
//             <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
//             <input
//               type="text"
//               id="first_name"
//               className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="John"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
//             <input
//               type="text"
//               id="last_name"
//               className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Doe"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Company</label>
//             <input
//               type="text"
//               id="company"
//               className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="Flowbite"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
//             <input
//               type="tel"
//               id="phone"
//               className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="123-45-678"
//               pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Website URL</label>
//             <input
//               type="url"
//               id="website"
//               className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="flowbite.com"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Unique visitors (per month)</label>
//             <input
//               type="number"
//               id="visitors"
//               className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder=""
//               required
//             />
//           </div>
//         </div>
//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email address</label>
//           <input
//             type="email"
//             id="email"
//             className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="john.doe@company.com"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Contact
import React, { useState } from 'react';
import { Mail, Phone, Globe, Users, Building, User, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    website: '',
    visitors: '',
    email: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mt-10 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300">
            Ready to transform your business? Let's start the conversation.
          </p>
        </div>

        {/* Contact Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12">
            {!isSubmitted ? (
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                      <User className="w-4 h-4 mr-2 text-blue-400" />
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                      <User className="w-4 h-4 mr-2 text-blue-400" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                {/* Company and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                      <Building className="w-4 h-4 mr-2 text-blue-400" />
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                      <Phone className="w-4 h-4 mr-2 text-blue-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>

                {/* Website and Visitors */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                      <Globe className="w-4 h-4 mr-2 text-blue-400" />
                      Website URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="https://yourwebsite.com"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                      <Users className="w-4 h-4 mr-2 text-blue-400" />
                      Monthly Visitors
                    </label>
                    <input
                      type="number"
                      name="visitors"
                      value={formData.visitors}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="10000"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="flex items-center text-sm font-medium text-gray-200 mb-2">
                    <Mail className="w-4 h-4 mr-2 text-blue-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] transform flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact