import { useState } from "react";

import "./App.css";

import { Button, Input } from "../lib";
import React from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="card">
				<div className="flex w-max gap-4">
					<Button color="blue">color blue</Button>
					<Button color="red">color red</Button>
					<Button color="green">color green</Button>
					<Button color="amber">color amber</Button>
				</div>
				{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
				<br></br>
				<div className="flex w-72 flex-col gap-6">
					<Input variant="static" label="Static" placeholder="Static" />
					<Input variant="standard" label="Standard" placeholder="Standard" />
					<Input variant="outlined" label="Outlined" placeholder="Outlined" />
				</div>
			</div>
		</>
	);
}

export default App;
