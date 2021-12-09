import { Link } from "solid-app-router"
import { Component } from "solid-js"

const Home: Component = () => {
	return (
		<div class="flex flex-1 flex-col items-center justify-center w-full h-full">
			<div class="h-full w-full">
				Home content placeholder
			</div>
			<div class="flex w-full px-4 py-2">
			 <Link href="/">Home</Link>
			 <Link href="/subs">Subscriptions</Link>
		 </div>
		</div>
	)
}

export default Home