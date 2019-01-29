import React,{Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from'../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form'
//import '../app/app.css';
import '../index.css';
import '../post-add-form/post-add-form.css';

import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';
import styled from 'styled-components';
import idGenerator from 'react-id-generator';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
export default class App extends Component  {
    constructor(props) {
        super(props) ;
        this.state = {
            data : [
                {label: 'React jkkjhjkhjkhjkh', important:true,like:false,id:idGenerator()},
                {label: 'aaaaaaaaaaaa', important:false,like:false,id:idGenerator()},
                {label: 'fffffff', important:false,like:false,id:idGenerator()}
            ],
            term:'',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.onToggle = this.onToggle.bind(this);

    }

    deleteItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0,index),...data.slice(index+1)];
            return {
                data : newArr
            }
        });
    }

    addItem(body){
        if (body.length === 0) {
            return
        }
        const newPost = {label:body,important:false,like:false,id:idGenerator()};
        this.setState(({data})=>{
            const newArr = [...data,newPost];
            return {
                data : newArr
            }
        })
    }

    onToggle(id,dd){
        this.setState(({data})=> {
            const index = data.findIndex(e=>e.id === id)
            const old = data[index];
            const newItem =  (dd === 'important') ? {...old,important: !old.important} : {...old,like: !old.like};
            const newArr = [...data.slice(0,index),newItem,...data.slice(index+1)];
            return {
                data:newArr
            }
        })
    }

    searchPost(items,term){
        if (term.length ===0){
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term)>-1
        })
    }
    filterPost(items,filter){
        if (filter === 'like') {
            return items.filter(item=>item.like === true)
        } else {
            return items
        }
    }

    onFilterSelect(filter){
        this.setState({filter})
    }

    onUpdateSearch(term){
        this.setState({term}) 
    }
    render(){
        const {data,term,filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data,term),filter)
        if (typeof(data)==="object"){
            return (
                <AppBlock>
                    <AppHeader
                        liked = {liked}
                        allPosts = {allPosts}
                    />
                    <div className='search-panel d-flex'>
                        <SearchPanel
                            onUpdateSearch = {this.onUpdateSearch}
                        />
                        <PostStatusFilter
                        filter={filter}
                        onFilterSelect ={this.onFilterSelect}/>
                    </div>
                    <PostList 
                        posts={visiblePosts}
                        onDelete = {this.deleteItem}
                        onToggle = {this.onToggle}
                        />
                    <PostAddForm
                        onAdd = {this.addItem}
                    />
                </AppBlock>
            )
        }
    }
}
