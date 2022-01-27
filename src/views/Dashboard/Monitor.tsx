import { FC, useEffect } from "react";

interface MonitorProps {}

const Monitor: FC<MonitorProps> = (props) => {
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            reject();
        });
        promise.then();
    }, []);
    return (
        <div className="monitor">
            <h1>监控页</h1>
        </div>
    );
};

export default Monitor;
