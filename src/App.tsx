import { Route, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";
const Home = lazy(() => import("./pages/Home"))
const Subscriptions = lazy(() => import("./pages/Subscriptions"))


const App: Component = () => {

  return (
   <div class="flex flex-col w-full h-full items-center justify-center">
		 <Routes>
			 <Route path="/" element={<Home />} />
			 <Route path="/subs" element={<Subscriptions />} />
		 </Routes>
		 
	 </div>
  );
};

export default App;
