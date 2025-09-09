import { createHashRouter } from 'react-router';
import { Suspense, lazy } from 'react';
import MainPage from '../pages/MainPage';
import News from '../pages/News';
// import NewsDetail from '@/pages/News/NewsDetail/index';
import Loading from '@/components/Loading'
const NewsDetail = lazy(() => import('@/pages/News/NewsDetail/index'))
const Documents= lazy(() => import('@/pages/Documents/index'))
const router = createHashRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/news',
    element: <News />
  },
  {
    path: '/news/detail',
    element: (
      <Suspense fallback={<Loading />}>
        <NewsDetail />
      </Suspense>
    )
  },
  {
    path: '/documents/:countryId/:typeId',
    element: (
      <Suspense fallback={<Loading />}>
        <Documents />
      </Suspense>
    )
  },
  {
    path: '/l',
    Component: Loading
  }
]);

export default router;