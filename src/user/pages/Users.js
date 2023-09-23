import React from "react";
import UsersList from "../components/UsersList";

const Users=()=>{
    const USERS=[
        {
            id:'U1',
            name:'Haider',
            image:'https://media.istockphoto.com/id/1685384958/tr/foto%C4%9Fraf/hand-holding-virtual-cloud-computing-with-global-internet-connection-business-global.jpg?s=1024x1024&w=is&k=20&c=9QK-VjhqcvSiXKtjQiSWFznIpPeBGudyfA4vXif7rbs=',
            places:3
        }
    ];
    return(
        <UsersList items={USERS} />
    )
}
export default Users;