import { ProviderAtuh } from '@hooks/useAuth';
import MainLayout from '@layout/MainLoyout';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAtuh>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAtuh>
    </>
  );
}

export default MyApp;
