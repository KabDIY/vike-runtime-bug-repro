export { LayoutDefault };

import "../index.css";
import { HeadDefault } from "./HeadDefault";

function LayoutDefault({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div className="flex min-h-screen flex-col">{children}</div>
			</body>
		</html>
	);
}
