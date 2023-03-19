import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { MainPage, DetailPage } from "./pages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:user/:id" element={<DetailPage />} />
        </Routes>
      </Router>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
