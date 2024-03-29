import React, {FC} from "react";
import {UserType} from "redux/users-reducer";
import {Paginator} from "components/common/Paginator/Paginator";
import {User} from "components/Users/User/User";


type UsersPropsType = {
    currentPage: number
    pageSize: number
    totalItemsCount: number
    unfollow: (id: number) => void
    follow: (id: number) => void
    onPageChanged: (page: number) => void
    users: UserType[],
    fetchingInProgress: number[]
}

export const Users: FC<UsersPropsType> = (
    {
        currentPage,
        pageSize,
        totalItemsCount,
        follow,
        unfollow,
        onPageChanged,
        users,
        fetchingInProgress,
    }) => {

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                       totalItemsCount={totalItemsCount} portionSize={10}/>
            {
                users.map(u => {
                    return (
                        <div key={u.id}>
                            <User unfollow={unfollow} follow={follow} user={u} fetchingInProgress={fetchingInProgress}/>
                        </div>
                    )
                })
            }
        </div>
    )
}