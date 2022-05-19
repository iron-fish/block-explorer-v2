import { useContext, useEffect, useCallback, useState } from "react";

import { BlockContext } from "contexts/ServiceContexts";
import { AsyncDataProps, BlockType, ResponseType } from "types";
import { uniqBy } from 'ramda'

const useInfiniteBlocks = (
  limit: number = 20,
  with_transactions: boolean = false,
  only_main: boolean | null = true
): [AsyncDataProps<ResponseType<BlockType[]>>, VoidFunction] => {
  const service = useContext(BlockContext);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<ResponseType<BlockType[]>>({ data: [], object: '',  });

  const loadBlocks: Function = useCallback(
    (params) => {
      setLoaded(false);
      setError(undefined);
      service
        .blocks(params)
        .then((data) =>
          setData((prevData) => ({
            ...data,
            data: uniqBy(block => block.id, prevData.data.concat(data.data)),
          }))
        )
        .catch(setError)
        .finally(() => setLoaded(true));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const loadNext: VoidFunction = (): void => {
    loadBlocks({
      limit,
      with_transactions,
      main: only_main,
      after: data.data[data.data.length - 1].id,
      // before: data.data[data.data.length - 1].id - limit,
    });
  };

  useEffect(() => {
    loadBlocks({ limit, with_transactions, main: only_main });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, with_transactions]);

  return [
    {
      loaded,
      error,
      data: {
        ...data,
        metadata: {
          has_next: data.data[data.data.length - 1]?.id > 0,
          has_previous: true
        }
      },
    },
    loadNext
  ];
};

export default useInfiniteBlocks;