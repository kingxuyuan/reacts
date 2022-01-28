/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 12:43:55
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-28 16:53:12
 * @Description: 封装工具函数
 */

import { lazy, Suspense } from 'react';

import RouteGuard from './RouteGuard';

/**
 * @description: 路由懒加载
 * @param {*}   component 组件 meta 路由信息
 * @param {*}   meta 路由参数
 * @return {*}  RouteGuard 
 * @author: 大侠传授两招吧
 */
export const lazyLoad = (importFn: () => any, meta = {} as any) => {
    const Element = lazy(importFn);
    const lazyElement = (
        <Suspense fallback={<></>}>
            <Element routeMeta={meta} />
        </Suspense>
    )

    return <RouteGuard element={lazyElement} meta={meta} />;
}

// 路由常规加载
export function load (element: any, meta = {} as any) {
    return <RouteGuard element={element} meta={meta} />
}