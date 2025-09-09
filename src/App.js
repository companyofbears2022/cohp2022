import './App.scss';

import MainPage from '@/pages/MainPage'
import '@/utils/i18n';
import { RouterProvider } from 'react-router';
import router from '@/router';

import ThemeProvider from '@/components/ThemeProvider';
import { useEffect } from 'react';
import i18n from './utils/i18n';
import { languages } from '@/utils/constants';

import useStore from '@/store';


function App() {

  const { setLanguage } = useStore()


  useEffect(() => {

    const languageTmp = localStorage.getItem('language')
    if(languageTmp&&languages.includes(languageTmp)) {
      i18n.changeLanguage(languageTmp)
      setLanguage(languageTmp)
    }

  }, [])

  return (
    <ThemeProvider>
      <RouterProvider router={router} >
        <div className="App">
          <MainPage></MainPage>
        </div>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
