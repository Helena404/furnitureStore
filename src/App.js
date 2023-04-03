import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFoolItem from "./components/ShowFoolItem";

class App extends React.Component {
	constructor(props){
		super(props); //передаем пропсы в конструктор родительского класса
		this.state = {
			orders:[],
			currentItems:[],
			items:[
				{
					id:1,
					title: 'Chair Cloe',
					img:'chair.jpg',
					desc: 'cutie putie chair',
					category: 'chairs',
					price:'100'
				},
				{
					id:2,
					title: 'Table Tom',
					img:'table.jpg',
					desc: 'cutie putie table',
					category: 'tables',
					price:'200'
				},
				{
					id:3,
					title: 'Sofa Sofie',
					img:'sofa.webp',
					desc: 'cutie putie Sofa',
					category: 'sofas',
					price:'420'
				},
				{
					id:4,
					title: 'Bed Ben',
					img:'bed.webp',
					desc: 'cutie putie bed',
					category: 'beds',
					price:'250'
				},
				{
					id:5,
					title: 'Closet Charley',
					img:'closet.jpg',
					desc: 'cutie putie closet',
					category: 'closets',
					price:'600'
				},
				{
					id:6,
					title: 'Stool Stell',
					img:'stool.jpg',
					desc: 'cutie putie stool',
					category: 'stools',
					price:'90'
				}
			],
			showFullItems: false,
			fullItem:[]
		}
		this.state.currentItems = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.onShowItem = this.onShowItem.bind(this)
	}
	render(){
		return (
			<div className="wrapper">
				<Header orders={this.state.orders} onDelete={this.deleteOrder}/>
				<Categories chooseCategory={this.chooseCategory}/>
				<Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

				{this.state.showFullItems && <ShowFoolItem onAdd={this.addToOrder} item={this.state.fullItem} onShowItem={this.onShowItem}/>}
				<Footer/>
			</div>
		  );
	}

	onShowItem(item){
		this.setState({fullItem:item})
		this.setState({showFullItems: !this.state.showFullItems})
	}

	chooseCategory(category){
		if(category==='all'){
			this.setState({currentItems: this.state.items})
			return
		}
		this.setState({
			currentItems: this.state.items.filter(el=>el.category===category)
		})
	}

	deleteOrder(id){
		this.setState({orders: this.state.orders.filter(el=> el.id !== id)})
	}

	addToOrder(item) {
		let isInArray=false
		this.state.orders.forEach(el =>{
			if(el.id===item.id)
				isInArray = true;
		})
		if (!isInArray) 
			this.setState({orders:[...this.state.orders, item] })
	}
}

export default App;
