import type { GetServerSideProps, NextPage } from "next";

import clsx from "clsx";
import { FC } from "react";
import {
	GetExtrinsicByIdDocument,
	GetExtrinsicByIdQuery,
} from "@/libs/api/generated";
import { useTheme } from "@/libs/hooks";
import { Layout } from "@/libs/components";
import { fetchData } from "@/libs/utils/prefetch";
import { Extrinsic as ExtrinsicRow } from "@/libs/components";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const id = context?.params?.id as string;
	const { extrinsic_by_pk: extrinsic } = (await fetchData(
		GetExtrinsicByIdDocument,
		{
			id,
		}
	)) as GetExtrinsicByIdQuery;

	return {
		props: {
			id,
			extrinsic,
		},
	};
};

interface ExtrinsicProps {
	id: string;
	extrinsic: GetExtrinsicByIdQuery["extrinsic_by_pk"];
}

const Extrinsic: NextPage<ExtrinsicProps> = ({ id, extrinsic }) => {
	const { isDarkMode } = useTheme();

	return (
		<div className="h-screen p-8 m-auto space-y-4 max-h-[90vh]">
			<div>
				<h1 className="text-xl">
					Extrinsic{" "}
					<span
						className={clsx(
							"prose font-mono text-sm",
							isDarkMode && "text-gray-300"
						)}
					>
						{id}
					</span>
				</h1>
			</div>
			<div className="border-2 rounded h-full p-2 overflow-y-auto">
				<Layout.TableRow rowClassName="text-lg grid-cols-3">
					<p>Tx Hash</p>
					<p>Method</p>
					<p>Events</p>
				</Layout.TableRow>
				<Layout.TableRow rowClassName="space-y-px grid-cols-3">
					<ExtrinsicRow
						extrinsic={extrinsic}
						eventsCount={extrinsic?.events?.length}
					/>
				</Layout.TableRow>

				<h1 className="text-xl pb-2 w-1/2 m-auto mt-6">Events</h1>
				<div className="w-1/2 m-auto border rounded">
					<Layout.TableRow rowClassName="text-lg grid-cols-2">
						<p>Section</p>
						<p>Method</p>
					</Layout.TableRow>
					{extrinsic?.events?.map((event, i) => (
						<Layout.TableRow rowClassName="space-y-px grid-cols-2" key={i}>
							<EventName eventName={event.name} />
						</Layout.TableRow>
					))}
				</div>
			</div>
		</div>
	);
};

export default Extrinsic;

const EventName: FC<{ eventName: string }> = ({ eventName }) => {
	const [eventSection, eventMethod] = eventName.split(".");

	return (
		<>
			<p>{eventSection}</p>
			<p>{eventMethod}</p>
		</>
	);
};
