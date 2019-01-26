import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from'../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form'
import '../app/app.css';
import '../index.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';
const App = () => {
    const data =[
        {label: 'jkkjhjkhjkhjkh', important:true,id:'uiyui'},
        {label: 'aaaaaaaaaaaa', important:false,id:"kljklj"},
        {label: 'fffffff', important:false,id:'kj'},
    ];
    if (typeof(data)==="object"){
        return (
            <div className='app'>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
            <PostList posts={data}/>
    <PostAddForm/>
            </div>
        )
    }
}
export default App