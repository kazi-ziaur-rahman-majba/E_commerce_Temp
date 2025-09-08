import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import './App.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
			<ReactQueryDevtools
				initialIsOpen={false}
				position={'bottom'}
				buttonPosition={'bottom-left'}
			/>
		</QueryClientProvider>
);
