import { useGetHistoryQuery } from "../../../api/historyApi";
import { useAuth } from "../../../hooks/useAuth";

import HistoryItem from "../../historyItem/HistoryItem";

const History = () => {

	const {uid} = useAuth();
	const {data, isLoading} = useGetHistoryQuery(uid);

	if(isLoading) {
		return (
			<div>
				ЖДЕМ
			</div>
		);
	}


	return data && (
		<div>
			{Object.entries(data).map((searchResponse) => {
				const [key, {search, searchUrl}] = searchResponse;
				return <HistoryItem
					key={key}
					search={search}
					uniqKey={key}
					searchUrl={searchUrl}/>;
			})}
		</div>
	);
};

export default History;