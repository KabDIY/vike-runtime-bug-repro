// Import the necessary modules
import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Page from "./+Page";


// Define the test
test("renders Page component", () => {
	render(
		
			<Page />
		
	);

	// Check if the "Welcome" header is present
	const headerElement = screen.getByText(/fully featured/i);
	expect(headerElement).not.toBeNull();
});
