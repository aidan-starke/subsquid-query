import type { GetServerSideProps, NextPage } from "next";

import clsx from "clsx";
import {
	GetBlockByHeightDocument,
	GetBlockByHeightQuery,
} from "@/libs/api/generated";
import { useTheme } from "@/libs/hooks";
import { fetchData } from "@/libs/utils";
import { Extrinsics } from "@/libs/types";
import { Extrinsic, Layout } from "@/libs/components";

export const getServerSideProps: GetServerSideProps = async (context) => {
	const height = context?.params?.height as string;
	const { block } = (await fetchData(GetBlockByHeightDocument, {
		height,
	})) as GetBlockByHeightQuery;

	return {
		props: {
			block: {
				hash: block[0]?.hash,
				height,
			},
			extrinsics: block[0]?.extrinsics,
		},
	};
};

interface BlockProps {
	block: {
		hash: string;
		height: number;
	};
	extrinsics: Extrinsics;
}

const Block: NextPage<BlockProps> = ({ block, extrinsics }) => {
	const { isDarkMode } = useTheme();

	return (
		<div className="h-screen p-8 m-auto space-y-4 max-h-[89vh]">
			<div>
				<h1 className="text-xl">Extrinsics</h1>
				<p>
					For block{" "}
					<span
						className={clsx(
							"font-mono text-sm text-gray-500",
							isDarkMode && "!text-gray-300"
						)}
					>
						{block?.height}
					</span>
				</p>
			</div>
			<div className="border-2 rounded h-full p-2 overflow-y-auto">
				<Layout.TableRow rowClassName="text-lg grid-cols-3">
					<p>Tx Hash</p>
					<p>Calls</p>
					<p>Events</p>
				</Layout.TableRow>
				{extrinsics?.map((extrinsic) => (
					<Layout.TableRow
						rowClassName="space-y-px grid-cols-3"
						key={extrinsic?.hash}
					>
						<Extrinsic
							extrinsic={extrinsic}
							eventsCount={extrinsic?.events_aggregate?.aggregate?.count}
						/>
					</Layout.TableRow>
				))}
			</div>
		</div>
	);
};

export default Block;
