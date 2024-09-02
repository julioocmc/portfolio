import { FC, useState } from 'react';

const ContactSection: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  //submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:juliooocmc18@gmail.com?subject=Contacto desde Portafolio&body=Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;
  };

  return (
    <div
      className="mx-auto m-10  p-7 rounded-lg shadow-lg"
      style={{ width: '400px', border: '2px solid #c4bcab' }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            value={message}
            style={{ resize: 'none' }}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            rows={5}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 text-lg font-medium text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
