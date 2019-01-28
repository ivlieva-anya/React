import React,{Component} from 'react';

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
export default  class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data : [
                {label: 'jkkjhjkhjkhjkh', important:true,id:'uiyui'},
                {label: 'aaaaaaaaaaaa', important:false,id:"kljklj"},
                {label: 'fffffff', important:false,id:'kj'}
            ]
        };
        this.deleteItem=this.deleteItem.bind(this);
        this.addItem=this.addItem.bind(this);
        this.maxId=4;

    }
    deleteItem(id){
        this.setState(({data})=>{
            const index= data.findIndex(elem=> elem.id===id);
            const newArr=[...data.slice(0,index),...data.slice(index+1)];
            return{
                data:newArr
            }
        });
    }

    addItem(body){
        const newItem={
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data})=>{
            const newArr =[...data,newItem];
            return{
                data:newArr
            }
        })
    }
    render(){
//                if (typeof(data)==="object"){
            return (
                <div className='app'>
                    <AppHeader/>
                    <div className='search-panel d-flex'>
                        <SearchPanel/>
                        <PostStatusFilter/>
                    </div>
                    <PostList
                        posts={this.state.data}
                        onDelete={this.deleteItem}/>
                    <PostAddForm
                    onAdd={this.addItem}/>
                </div>
            )
        }

    //}
}
