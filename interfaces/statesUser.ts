export interface statesUser
{
    login:string;  
    avatar_url:string;
    followers_url:string;
    bio:string;
    email:string;
    name:string;
    following:number;
    followers:number;
    organizations_url:number;
    starred_url:string;
    location:string;
    public_repos:number;
    repos_url:string;
    following_url:string;
}

export const initialValues:statesUser=
{
    login:"",
    avatar_url:"",
    followers_url:"",
    bio:"",
    email:"",
    name:"",
    following:0,
    followers:0,
    organizations_url:0,
    starred_url:"",
    location:"",
    public_repos:0,
    repos_url:"",
    following_url:"",
};