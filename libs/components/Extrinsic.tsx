import clsx from "clsx";
import { camelCase } from "lodash";
import { useTheme } from "@/libs/hooks";
import JSONPretty from "react-json-pretty";
import { FC, useMemo, useState } from "react";
import { GetExtrinsicByIdQuery } from "@/libs/api/generated";
import { Extrinsic as ExtrinsicInterface } from "@/libs/types";

interface ExtrinsicProps {
	extrinsic: ExtrinsicInterface | GetExtrinsicByIdQuery["extrinsic_by_pk"];
	eventsCount?: number;
}

export const Extrinsic: FC<ExtrinsicProps> = ({ extrinsic, eventsCount }) => {
	const [viewArgs, setViewArgs] = useState<boolean>(false);
	const { isDarkMode } = useTheme();

	const [callSection, callMethod] = useMemo(
		() => extrinsic?.calls[0].name.split(".") ?? ["", ""],
		[extrinsic?.calls]
	);

	return (
		<>
			<a
				href={`/extrinsic/${extrinsic?.id}`}
				className={clsx(
					"truncate text-sm font-mono prose text-blue-600",
					isDarkMode && "text-blue-200"
				)}
			>
				{extrinsic?.hash}
			</a>
			<div className="space-y-2">
				<div className="flex items-center">
					<p
						className={clsx(
							"prose flex-1 font-mono text-sm",
							isDarkMode && "text-gray-300"
						)}
					>
						{camelCase(callSection)}.{camelCase(callMethod)}
					</p>
					<button
						className={clsx(
							"font-mono text-xs border p-2 shadow rounded text-gray-600 duration-300",
							viewArgs && "bg-gray-200",
							!viewArgs && isDarkMode && "!text-gray-100"
						)}
						onClick={() => setViewArgs(!viewArgs)}
					>
						{viewArgs ? "Hide" : "View"} Args
					</button>
				</div>
				{viewArgs && (
					<div className="border p-2 shadow rounded max-h-64 max-w-fit overflow-y-auto">
						<JSONPretty
							data={extrinsic?.calls[0].args}
							className={clsx(
								"text-xs text-gray-600",
								isDarkMode && "!text-gray-100"
							)}
						/>
					</div>
				)}
			</div>
			<div className="text-sm flex">
				<p>
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
		</>
	);
};
