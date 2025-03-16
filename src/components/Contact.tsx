import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  // State to store form data and submission status
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
    to_name: "",
  });

  const [status, setStatus] = useState({
    message: "",
    check: false,
  });

  // Handle form data changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formData.email && formData.from_name && formData.message) {
      // Using EmailJS to send email
      emailjs
        .send(
          "service_ux90ab1", // Your EmailJS service ID
          "template_vllsx88", // Your EmailJS template ID
          formData,
          "egxwzgyzYulrFTJ0P" // Your EmailJS user ID
        )
        .then(
          (response) => {
            setStatus({ message: "Message sent successfully!", check: true });
            setFormData({ from_name: "", email: "", message: "", to_name: "" }); // Clear the form
          },
          (error) => {
            setStatus({
              message: "Failed to send message. Please try again later.",
              check: false,
            });
          }
          
        );
    } else
      setStatus({
        message: "Failed to send message. Please fill the form.",
        check: false,
      });
      setTimeout(() => {
        setStatus({
          message: "",
          check: false,
        });; // Hide the message after 10 seconds
      }, 10000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient section-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600" size={20} />
                <a href="mailto:jhanaaditya@gmail.com">jhanaaditya@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600" size={20} />
                <a href="tel:+916201920138">+91 620 1920 138</a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600" size={20} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="from_name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="input-field"
              ></textarea>
            </div>

            <div className="justify-items-center">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
              >
                Send Message
              </button>

              {/* Display status message */}
              {status && (
                <p
                  className={
                    "text-center mt-4 " +
                    (status.check ? "text-green-700" : "text-gray-700")
                  }
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
