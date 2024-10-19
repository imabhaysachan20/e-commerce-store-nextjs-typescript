import Logo from './Logo';
import LinksDropdown from './LinksDropdown';
import DarkMode from './DarkMode';
import CartButton from './CartButton';
import NavSearch from './NavSearch';
import Container from '../global/Container';
import { Suspense } from 'react';

const NavBar = () => {
  return (
    <nav className="border-b ">
      <Container className="flex flex-col sm:flex-row sm:block flex-wrap py-8 gap-4">
        <div className='flex justify-between'>
      <Logo />
      <div className='hidden sm:block' >
      <Suspense fallback={<div>...</div>}>
        <NavSearch />
        </Suspense>
        </div>
      <div className='flex gap-4 items-center '>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
        </div>
        <div className='sm:hidden self-center w-full'>
      <Suspense fallback={<div>...</div>}>
        <NavSearch />
        </Suspense>
        </div>
        
      </Container>
      
    </nav>
  )
}

export default NavBar
