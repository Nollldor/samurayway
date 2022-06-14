import React from 'react';
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDatatype} from "../../redux/state";


type ProfilePropsType = {
    PostsData: {
        posts: PostsDatatype
    }
    addPostCallback: (text: string) => void
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <Posts PostsData={props.PostsData.posts} addPostCallback={props.addPostCallback}/>
        </div>

    );
}