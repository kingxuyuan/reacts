/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-29 19:07:26
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-29 20:24:32
 * @Description: 
 */
import { useEffect, useState, useCallback } from 'react';

const useSyncCallback = (callback: (args: any) => void) => {
    const [proxyState, setProxyState] = useState({ current: false });
    const [params, setParams] = useState(null);

    const Func = useCallback((args: any) => {
        setParams(args);
        setProxyState({ current: true });
    }, [proxyState]);

    useEffect(() => {
        if (proxyState.current === true) setProxyState({ current: false });
    }, [proxyState]);

    useEffect(() => {
        proxyState.current && callback(params);
    });

    return Func;
}

export default useSyncCallback;