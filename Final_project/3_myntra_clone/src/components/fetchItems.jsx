import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemsAction } from "../store/Items";
import { useSelector } from "react-redux";
// import { FetchStatusAction } from "../store/fetchStatus";

const FetchItems = ()=>
{
    const fetchStatus = useSelector((store)=>store.fetchStatus);

    const dispatch = useDispatch();
     useEffect(() =>
            {
                if(fetchStatus.fetchDone) return;

                const controller = new AbortController();
                const signal = controller.signal;

                // dispatch(FetchStatusAction.markFetchStarted());
                fetch('http://localhost:8080/items',{signal})
                .then(res => res.json())
                .then(({items}) =>
                    {
                        // dispatch(FetchStatusAction.markFetchDone());
                        dispatch(
                            itemsAction.addInitialItems(items[0])
                        );
                        // dispatch(FetchStatusAction.markFetchEnded());
                    }
                )
                .catch(() =>
                    {
                        dispatch(
                            itemsAction.addInitialItems([])
                        );
                    }
                );
            
                return ()=>
                {
                    controller.abort();
                };
            }
            ,[]
        );
    return(<></>);
}
export default FetchItems;