import { BrowserRouter, Route, Routes } from "react-router";
import { Movies, MovieDetails, MoviesLayout } from "@/pages/movies";
import PageNotFound from "@/pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MoviesLayout />}>
            <Route index path="/" element={<Movies />} />
          </Route>
          <Route path="/movies/:movie_id" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
