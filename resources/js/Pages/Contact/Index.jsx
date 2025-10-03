
import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';


export default function Index({ contacts }) {
    const contact = contacts && contacts.length > 0 ? contacts[0] : null;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => reset(),
        });
    };

    return (
        <AppLayout>
            <Head title="Contact" />
            {/* Banner */}
            <section className="flex items-center justify-between max-w-6xl mx-auto px-4 py-12">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
                    <p className="text-gray-500">Home <span className="mx-1">-</span> contact us</p>
                </div>
                <img src="/storage/images/banner/banner_img.png" alt="Contact Chair" className="w-48 h-48 object-contain" />
            </section>

            {/* Google Maps Iframe */}
            <section className="flex justify-center mb-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5037.387110339002!2d4.338645077168242!3d50.85535875812649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c275028d3%3A0xc7799151146ebf77!2sMolenGeek!5e0!3m2!1sfr!2sbe!4v1758648112878!5m2!1sfr!2sbe"
                    width="1200"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            {/* Contact Form & Info */}
            <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <textarea className="w-full border rounded-lg p-4" rows={6} name="message" placeholder="Enter Message"
                            value={data.message} onChange={e => setData('message', e.target.value)} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input className="border rounded-lg p-4" type="text" name="name" placeholder="Enter your name"
                                value={data.name} onChange={e => setData('name', e.target.value)} />
                            <input className="border rounded-lg p-4" type="email" name="email" placeholder="Enter email address"
                                value={data.email} onChange={e => setData('email', e.target.value)} />
                        </div>
                        <input className="border rounded-lg p-4 w-full" type="text" name="subject" placeholder="Enter Subject"
                            value={data.subject} onChange={e => setData('subject', e.target.value)} />
                        <button type="submit" className="bg-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-pink-600 transition" disabled={processing}>
                            {processing ? 'Envoi...' : 'SEND MESSAGE'}
                        </button>
                        {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
                        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                        {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                    </form>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-4">
                        <span className="text-2xl"><i className="ti-home" /></span>
                        <div>
                            <div className="font-bold">{contact?.street || 'Rue inconnue'}, {contact?.city || 'Ville inconnue'}</div>
                            <div className="text-gray-500">{contact?.zip_code || ''} {contact?.state || ''}</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-2xl"><i className="ti-tablet" /></span>
                        <div>
                            <div className="font-bold">{contact?.phone_number || 'Non renseigné'}</div>
                            <div className="text-gray-500">Mon to Fri 9am to 6pm</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-2xl"><i className="ti-email" /></span>
                        <div>
                            <div className="font-bold">{contact?.email || 'Non renseigné'}</div>
                            <div className="text-gray-500">Send us your query anytime!</div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
