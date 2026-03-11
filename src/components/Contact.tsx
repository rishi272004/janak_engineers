'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitMessage('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Have a project in mind? We'd love to hear from you. Contact us for inquiries and quotations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="p-8 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl text-center border border-cyan-200 transition hover:shadow-lg">
            <Phone className="w-10 h-10 text-cyan-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+919978849525" className="text-gray-700 font-medium hover:text-cyan-600 transition">+91 9978849525</a>
            <p className="text-gray-600 text-sm mt-2">Available for inquiries</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-center border border-gray-200 transition hover:shadow-lg">
            <Mail className="w-10 h-10 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <a href="mailto:janakeng@hotmail.com" className="text-gray-700 font-medium hover:text-cyan-600 transition">janakeng@hotmail.com</a>
            <p className="text-gray-600 text-sm mt-2">We respond within 24 hours</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl text-center border border-cyan-200 transition hover:shadow-lg">
            <MapPin className="w-10 h-10 text-cyan-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <a href="https://share.google/dtkmTxfYW4y61uDXH" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium hover:text-cyan-600 transition">Janak Engineers 921/A1, GIDC Estate, Makarpura, Vadodara, Gujarat - 390010</a>
          </div>
        </div>

       
      </div>
    </section>
  );
}
