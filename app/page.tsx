import FeaturedProducts from '@/components/home/FeaturedProducts';
import { Suspense } from 'react';
import LoadingContainer from '@/components/global/LoadingContainer';
import Hero from '@/components/home/Hero';

function HomPage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
      <FeaturedProducts />
      </Suspense>
    </>
  );
}
export default HomPage;