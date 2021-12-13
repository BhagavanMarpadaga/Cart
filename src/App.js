import React from 'react';
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
// import * as firebase from 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestrore';
import  firebase from 'firebase'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading:true

    }
    this.db=firebase.firestore();
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("Products")
      .onSnapshot(snapshot => {
        //console.log("snapshot docs",snapshot.docs[0].data());
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }


  handleonIncreaseQuantity = (product) => {
    const { products } = this.state;
    //console.log(prod);
    const index = products.indexOf(product);
    //increase the quantity in database as well
    const docref=this.db.collection('Products').doc(products[index].id);
    docref.update(
      {
        qty:products[index].qty+1
      }
    ).then(()=>{
      console.log("updated successfully");
    }).catch((err)=>{
      console.log("Error while increasing the quantity in DB");
    })  
    // products[index].qty + 1;
    // this.setState({
    //   products: products
    // })
    // //console.log("yes you need to in the qty of this item",product);
  }
  handleondecreaseQuantity = (product) => {
    if (product.qty <= 0) {
      return;
    }
    const { products } = this.state;
    const index = products.indexOf(product);
    const docref=this.db.collection('Products').doc(products[index].id);
    docref.update({
      qty:products[index].qty-1
    }).then(()=>{
      console.log("Item upadted successfuly");
    })
    .catch((err)=>{
      console.log("Failed to decreasw the quantity in db");
    })

    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }
  handleDeletecartItem = (id) => {
    const docref=this.db.collection('Products').doc(id);
    docref.delete().then(()=>{
      console.log("Item deleted");
    })

    // const { products } = this.state;
    // const restItems = products.filter((item) => item.id != id);
    // this.setState({
    //   products: restItems
    // })
  }

  getCount=()=>{
    let count=0;
    const {products}=this.state;
    const arr=products;
    for(let i=0;i<arr.length;i++)
    {

      count=parseInt(count)+parseInt(arr[i].qty);
    }
 
    return count;
  }
  totalPrice=()=>{
    let price=0;
    const {products}=this.state;
    // products.forEach((p)=>{
    //   price+=p.price
    // })
    products.map(product=>{
      price+=product.price*product.qty
    })
    return price;
  }
  addItem=()=>
  {

    this.db
    .collection('Products')
    .add({
      title:"Bike",
      price:200000,
      qty:2,
      img:""
    }).then((docref)=>{
      console.log(docref);
    }).catch((err)=>{
      console.log("ERROR in adding product",err);
    })

  }


  render() {
    const { products,loading } = this.state;
 
    return (
      <div className="App">
        <Navbar count={this.getCount()}/>
        {/* <button style={{fontSize:15, padding:15}} onClick={this.addItem}>Click here to add a item</button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleonIncreaseQuantity}
          onDecreaseQuantity={this.handleondecreaseQuantity}
          onDeleteCartItem={this.handleDeletecartItem}
        />
        {loading && <h1>Loading ...</h1>}
        {!loading && <div style={{margin:20,width:200,padding:20,border: '1px solid rgba(0, 0, 0, 0.05)',backgroundColor:'#d7d5dd',fontSize:20,fontWeight:'bold'}}>Total : {this.totalPrice()}</div>}
        
        
      </div>

    );

  }
}


export default App;
