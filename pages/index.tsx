import type { GetServerSideProps, NextPage } from "next";

import {
	GetBlocksDocument,
	GetBlocksQuery,
	useGetBlocksQuery,
	GetExtrinsicsDocument,
	GetExtrinsicsQuery,
	useGetExtrinsicsQuery,
} from "@/libs/api/generated";
import { usePolling } from "@/libs/hooks";
import { Block, ExtrinsicSimple } from "@/libs/components";
import { queryClient } from "@/libs/client";
import { dehydrate, DehydratedState, useHydrate } from "@tanstack/react-query";
import { prefetch } from "@/libs/utils/prefetch";

export const getServerSideProps: GetServerSideProps = async () => {
	await prefetch("GetBlocks", GetBlocksDocument);
	await prefetch("GetExtrinsics", GetExtrinsicsDocument);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

interface HomeProps {
	dehydratedState: DehydratedState;
}

const Home: NextPage<HomeProps> = ({ dehydratedState }) => {
	useHydrate(dehydratedState);

	const { block } = usePolling<GetBlocksQuery>(
		{} as GetBlocksQuery,
		useGetBlocksQuery
	);
	const { extrinsic } = usePolling<GetExtrinsicsQuery>(
		{} as GetExtrinsicsQuery,
		useGetExtrinsicsQuery
	);

	return (
		<div className="h-screen p-8 m-auto grid grid-cols-2 gap-4 max-h-[95vh]">
			<div className="border-2 rounded h-full overflow-y-auto p-2">
				<h1 className="text-xl font-mono p-4">Latest Blocks</h1>
				{block?.map((block) => (
					<Block
						key={block?.id}
						hash={block?.hash}
						parentHash={block?.parent_hash}
						height={block?.height}
						extrinsicsCount={block?.extrinsics_aggregate?.aggregate?.count}
					/>
				))}
			</div>
			<div className="border-2 rounded h-full overflow-y-auto p-2">
				<h1 className="text-xl font-mono p-4">Latest Extrinsics</h1>
				{extrinsic?.map((extrinsic) => (
					<ExtrinsicSimple
						key={extrinsic?.id}
						id={extrinsic?.id}
						hash={extrinsic?.hash}
						eventsCount={extrinsic?.events_aggregate?.aggregate?.count}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
