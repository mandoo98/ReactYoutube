import React from 'react';
import './App.css';
import SearchHeader from './components/SearchHeader';
import { Outlet } from 'react-router-dom';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// 서버상태(가져온 데이터)를 관리하는 툴

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
