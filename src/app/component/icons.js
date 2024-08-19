import Image from 'next/image'; // Ensure you import Image from 'next/image' for Next.js support
import { 
  UserIcon, PhoneIcon, MagnifyingGlassIcon, MicrophoneIcon, 
  ArrowRightEndOnRectangleIcon, ArrowLeftEndOnRectangleIcon, HeartIcon, 
  ShoppingBagIcon, ShoppingCartIcon, PresentationChartBarIcon, 
  ArrowRightCircleIcon, ExclamationTriangleIcon, EnvelopeIcon, 
  LockClosedIcon 
} from '@heroicons/react/24/outline';

import MacomartIcon from '../../../public/macomart.ico';

export { 
  UserIcon, PhoneIcon, MagnifyingGlassIcon, MicrophoneIcon, 
  ArrowRightEndOnRectangleIcon, ArrowLeftEndOnRectangleIcon, 
  HeartIcon, ShoppingBagIcon, ShoppingCartIcon, 
  PresentationChartBarIcon, ArrowRightCircleIcon, 
  ExclamationTriangleIcon, EnvelopeIcon, LockClosedIcon 
};

export const LogoIcon = (props) => (
  <Image src={MacomartIcon} alt="Macomart" {...props} />
);
