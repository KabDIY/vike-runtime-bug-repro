import { useState } from "react";

export const ControlledInput = () => {
	const [value, setValue] = useState("");
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="border p-2 rounded"
				placeholder="Type something..."
			/>
			<p className="mt-4">You typed: {value}</p>
		</div>
	);
};
