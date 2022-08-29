import { FC } from "react";
import { Layout } from "@/libs/components";
import clsx from "clsx";
import { useTheme } from "@/libs/hooks";

interface ExtrinsicSimpleProps {
	id?: string;
	hash?: string;
	eventsCount?: number;
}

export const ExtrinsicSimple: FC<ExtrinsicSimpleProps> = ({
	id,
	hash,
	eventsCount,
}) => {
	const { isDarkMode } = useTheme();

	return (
		<Layout.TableWrapper>
			<div className="flex space-x-2">
				<div
					className={clsx(
						"prose bg-gray-200 h-12 w-12 flex items-center rounded-3xl",
						isDarkMode && "bg-gray-300"
					)}
				>
					<p className="text-center w-full">Ex</p>
				</div>
				<div className="flex items-center">
					<a
						className={clsx(
							"text-blue-600 font-mono text-sm",
							isDarkMode && "text-blue-200"
						)}
						href={`/extrinsic/${id}`}
					>
						{id}
					</a>
				</div>
			</div>

			<div className="text-sm flex">
				<p className="text-center w-full">
					<span
						className={clsx(
							"font-mono text-gray-500",
							isDarkMode && "!text-gray-300"
						)}
					>
						{eventsCount ?? 0}
					</span>{" "}
					{eventsCount === 1 ? "event" : "events"}
				</p>
			</div>

			<div className="text-sm space-y-px">
				<p className="flex">
					Hash&nbsp;
					<span
						className={clsx(
							"font-mono text-gray-500 truncate",
							isDarkMode && "!text-gray-300"
						)}
					>
						{hash}
					</span>
				</p>
			</div>
		</Layout.TableWrapper>
	);
};
