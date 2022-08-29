import { useEffect } from "react";
import { graphQLClient } from "@/libs/client";
import { SetStateAction } from "jotai";

export const useAtomPolling = <T>(
	setAtom: (update: SetStateAction<T>) => void,
	queryFunction: Function,
	queryParams?: Record<string, unknown>,
	refetchInterval: number = 5000
) => {
	const { data, isFetching } = queryFunction(graphQLClient, queryParams, {
		refetchInterval,
		refetchIntervalInBackground: true,
	});

	useEffect(() => {
		if (!data) return;

		setAtom(data);
	}, [data, isFetching]);
};
