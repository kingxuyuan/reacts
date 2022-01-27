import { FC } from "react";
import { Link } from "react-router-dom";

import { Calendar, Pagination } from "antd";

interface HomeProps {}

const clas = {
    width: "300px",
    border: "1px solid #f0f0f0",
    borderRadius: "2px",
};

const Home: FC<HomeProps> = (props) => {
    const onPanelChange = (value: any, mode: any) => {
        console.log(value, mode);
    };

    return (
        <div className="home">
            <h1>分析页</h1>
            <Calendar fullscreen={false} style={clas} onPanelChange={onPanelChange} />
            <Pagination defaultCurrent={1} total={50} />
            <div>
                <Link to="/mine">我的页面</Link>
            </div>
            <div>
                <Link to="/login">登录页面</Link>
            </div>
        </div>
    );
};
export default Home;
