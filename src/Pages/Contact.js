import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;

  return (
    <main className="container mx-auto max-width py-16 px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-dark-heading dark:text-light-heading font-bold">
        For any questions, please contact me at
      </h1>

      <h3 className="text-center text-sm sm:text-2xl md:text-3xl text-gradient font-semibold pt-6 sm:pt-8">
        <a href={`mailto:${email}`} className="hover:text-orange-500 transition-colors">
          {email}
        </a>
      </h3>

      <span className="text-center text-content text-lg sm:text-xl font-light block mt-4">
        or on WhatsApp at
      </span>

      <h3 className="text-center text-xl sm:text-2xl md:text-3xl text-gradient font-semibold pt-4">
        <a href={`tel:${phone}`} className="hover:text-orange-500 transition-colors">
          {phone}
        </a>
      </h3>
    </main>
  );
}

export default Contact;
