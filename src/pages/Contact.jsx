import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState({});

  const validateInput = () => {
    const newErrors = {};
    if (name === "") {
      newErrors.name = "Name is required.";
    }

    if (email === "") {
      newErrors.email = "Email is required.";
    }

    if (number === "") {
      newErrors.number = "Mobile number is required.";
    }

    if (message === "") {
      newErrors.message = "Message is required.";
    }

    if (!file) {
      newErrors.file = "Attachment is required.";
    }

    setError(newErrors);

    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }

    
    console.log({
      name,
      email,
      number,
      message,
      file,
    });
  };

  return (
    <div className="bg-white h-fit">
      <div className="bg-slate-100 h-fit px-4 md:px-16 lg:px-32">
        <div className="py-5 flex flex-col gap-5">
          <div>
            <h1 className="text-3xl font-bold">Contact Us</h1>
          </div>
          <div>
            <p className="max-w-[580px] text-2xl mb-5">
              Please fill out the form below to contact us, or email{" "}
              <a
                className="hover:text-orange-500 hover:underline"
                href="mailto:support@smartdocs365.com"
              >
                support@smartdocs365.com
              </a>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                  <label className="whitespace-nowrap text-xl" htmlFor="name">
                    Your name:
                  </label>
                  <input
                    className="p-3 w-full md:w-1/2 lg:w-1/3 outline-none border-2 border-gray-500 bg-transparent"
                    type="text"
                    id="name"
                    placeholder="First and last name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                  <label className="whitespace-nowrap text-xl" htmlFor="email">
                    Your mail id:
                  </label>
                  <input
                    className="p-3 w-full md:w-1/2 lg:w-1/3 outline-none border-2 bg-transparent border-gray-500"
                    type="email"
                    id="email"
                    placeholder="your@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                  <label className="whitespace-nowrap text-xl" htmlFor="phone">
                    Mobile No.:
                  </label>
                  <input
                    className="p-3 w-full md:w-1/2 lg:w-1/3 outline-none border-2 bg-transparent border-gray-500"
                    type="tel"
                    id="phone"
                    placeholder="Mobile No."
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  {error.number && <p className="text-red-500 text-sm">{error.number}</p>}
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-2xl" htmlFor="message">
                    Message:
                  </label>
                  <textarea
                    className="w-full md:w-1/2 lg:w-1/3 p-4 border-2 bg-transparent outline-none border-gray-500"
                    id="message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {error.message && <p className="text-red-500 text-sm">{error.message}</p>}
                </div>

                <div>
                  <label className="text-xl" htmlFor="file">
                    Attachment:
                  </label>
                  <input
                    className="w-full md:w-1/2 lg:w-1/3 p-3 border-2 border-gray-500"
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  {error.file && <p className="text-red-500 text-sm">{error.file}</p>}
                </div>

                <div>
                  <button
                    className="w-full md:w-1/2 lg:w-1/3 p-3 bg-orange-500 text-white hover:bg-orange-600"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
