/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 14:23:41
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 18:47:46
 * @Description: 
 */
import { FC } from 'react';
 
 interface indexProps {
 
 }
 
 const index: FC<indexProps> = (props) => {
     console.log('mine');
     
     return (
         <div className="index">
         <h1>Mine</h1>
         </div>
     );
 }
 
 export default index;
