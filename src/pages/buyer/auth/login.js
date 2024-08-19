

import Link from 'next/link';
import { useState } from 'react';
import { UserIcon, PhoneIcon, EnvelopeIcon, LockClosedIcon } from '../../../app/component/icons';
import '../../../styles/globals.css';
import RootLayout from '../../../app/layout';



export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!termsAccepted) {
      alert("You must accept the terms of service and privacy policy");
      return;
    }
    // Handle registration logic here
  };

  return (
 <RootLayout>
       <div className="flex justify-center ">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <div className='text-center'>
          <h2 className="text-2xl font-bold mb-6 text-gray">Log in</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <EnvelopeIcon className="w-5 h-5 text-gray absolute left-3 top-2/3 transform -translate-y-1/2" />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <LockClosedIcon className="w-5 h-5 text-gray absolute left-3 top-2/3 transform -translate-y-1/2" />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pl-10 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <Link href="../" className="font-medium text-gray hover:text-primary-dark">Forgot Password?</Link>
            </p>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray text-white font-semibold rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Log in
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don{''}t have an account?{' '}
              <Link href="./" className="font-medium text-primary hover:text-primary-dark">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
 </RootLayout>
  );
}
