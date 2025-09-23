import { Head } from '@inertiajs/react';

export default function Index({ contacts }) {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5037.387110339002!2d4.338645077168242!3d50.85535875812649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c275028d3%3A0xc7799151146ebf77!2sMolenGeek!5e0!3m2!1sfr!2sbe!4v1758648112878!5m2!1sfr!2sbe"
                width="1200"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Head title="contact" />
            {contacts.map(c => (
                <div key={c.id}>
                    <p>
                        {c.street} {c.number}
                    </p>
                </div>
            ))}
        </>
    );
}
