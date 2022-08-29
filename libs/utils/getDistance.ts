import { formatDistance } from "date-fns";

export const getDistance = (timestamp: string) =>
	formatDistance(new Date(timestamp), new Date(), {
		addSuffix: true,
	});
