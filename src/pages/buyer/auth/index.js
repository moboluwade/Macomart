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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 bg-white shadow-md rounded-lg">
        <div className='text-center'>
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Create Account</h2>
          <p className='text-gray-600 mb-4'>Welcome to Macomart! Join our community and start your seamless shopping experience. Fill out the form below.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Fields */}
          {[
            { id: 'Name', label: 'Full Name', value: name, setValue: setName, icon: <UserIcon className="w-5 h-5 text-gray absolute left-3 top-2/3 transform -translate-y-1/2" /> },
            { id: 'email', label: 'Email', value: email, setValue: setEmail, icon: <EnvelopeIcon className="w-5 h-5 text-gray absolute left-3 top-2/3 transform -translate-y-1/2" /> },
            { id: 'number', label: 'Phone Number', value: phoneNumber, setValue: setPhoneNumber, icon: <PhoneIcon className="w-5 h-5 text-gray absolute left-3 top-2/3 transform -translate-y-1/2" /> },
            { id: 'password', label: 'Password', value: password, setValue: setPassword, icon: <LockClosedIcon className="w-5 h-5 text-gray absolute left-3 top-2/3 transform -translate-y-1/2" /> },
            { id: 'confirmPassword', label: 'Confirm Password', value: confirmPassword, setValue: setConfirmPassword, icon: <LockClosedIcon className="w-5 h-5 text-gray absolute left-3 top-2/3 transform -translate-y-1/2" /> }
          ].map(({ id, label, value, setValue, icon }) => (
            <div className="relative" key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
              {icon}
              <input
                type={id.includes('password') ? 'password' : 'text'}
                id={id}
                name={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                className="pl-10 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
          ))}

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the
              <Link href="/terms-of-service" className="text-primary hover:text-primary-dark"> Terms of Service</Link> and
              <Link href="/privacy-policy" className="text-primary hover:text-primary-dark"> Privacy Policy</Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray text-white font-semibold rounded-md shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Create Account
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="auth/login" className="font-medium text-primary hover:text-primary-dark">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
