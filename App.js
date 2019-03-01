import React from "react";
import { StyleSheet, Text, View,Image, StatusBar } from "react-native";
import BtnCalcolatrice from "./components/BtnCalcolatrice";

StatusBar.setHidden(false);
/*
const Button = props => (
  <View style={[styles.buttonProperty,styles.flex_center_double]}>
    <Text style={styles.text}>{props.symbol}</Text>
  </View>
);

const ListOfSymbol1 = [
  {symbol:"C"},
  {symbol:"√a"},
  {symbol:"%"},
  {symbol:"÷"}
];

const ListOfSymbol2= [
  {symbol:"7"},
  {symbol:"8"},
  {symbol:"9"},
  {symbol:"×"}
];

const ListOfSymbol3 = [
  {symbol:"4"},
  {symbol:"5"},
  {symbol:"6"},
  {symbol:"-"}
];

const ListOfSymbol4 = [
  {symbol:"1"},
  {symbol:"2"},
  {symbol:"3"},
  {symbol:"+"}
];

const ListOfSymbol5 = [
  {symbol:"0"},
  {symbol:""},
  {symbol:"."},
  {symbol:"="},

];



export default App extends React.Component{
  
  estraiListOfSymbol1 = () =>(
    ListOfSymbol1.map( (obj,index) => <Button symbol={obj.symbol} key={index}></Button>)
  );

  estraiListOfSymbol2 = () =>(
    ListOfSymbol2.map( (obj,index) => <Button symbol={obj.symbol} key={index}></Button>)
  );

  estraiListOfSymbol3 = () =>(
    ListOfSymbol3.map( (obj,index) => <Button symbol={obj.symbol} key={index}></Button>)
  );

  estraiListOfSymbol4 = () =>(
    ListOfSymbol4.map( (obj,index) => <Button symbol={obj.symbol} key={index}></Button>)
  );

  estraiListOfSymbol5 = () =>(
    ListOfSymbol5.map( (obj,index) => <Button symbol={obj.symbol} key={index}></Button>)
  );

    return (
      <View style={styles.container}>

        

        <View style={[styles.flex_row]}>
          {this.estraiListOfSymbol1()}
        </View>
        
        <View style={[styles.flex_row]}>
          {this.estraiListOfSymbol2()}
        </View>

        <View style={styles.flex_row}>
          {this.estraiListOfSymbol3()}
        </View>

        <View style={styles.flex_row}>
          {this.estraiListOfSymbol4()}
        </View>
        
        <View style={styles.flex_row}>
          {this.estraiListOfSymbol5()}
        </View>

      </View>
    );
}

*/

export default class App extends React.Component {

  state = {
    valore: "",
    risultato: 0,
    operazione: ""
  }    

  buttonNumberClick = props => {
 // {console.log("Valore props: "+props)}
    this.setState({
      valore: this.state.valore+props
    })
  //  {console.log(this.state.valore)}
  }; 

  buttonReset = () =>{
    this.setState({
      valore:"",
      risultato:0,
      operazione:""
    })
  //  console.log("valoreState:"+this.state.valore);
  };

  buttonCancel = () =>{
    {
    //  console.log(this.state.valore);
      let x = this.state.valore;
      x = x.substring(0,x.length-1);
    //  console.log("x:"+x);
      this.setState({
        valore: x
      })     
    }
  }

  buttonSum = () => {
    {
      this.setState({
        risultato : this.state.operazione == "=" ? this.state.risultato : this.state.risultato + parseInt(this.state.valore),

        valore:"",
        operazione:"+"
      })
    //  console.log("risultato: "+this.state.risultato)
    }
  };
  
  buttonSubtraction = () => {
    {
      this.setState({
        risultato : this.state.operazione == "="? this.state.risultato : 
          this.state.risultato == 0 ? this.state.valore :
        this.state.risultato - parseInt(this.state.valore),

        valore:"",
        operazione:"-"
      })
    }
  };

  buttonMultply = () => {
    {
      this.setState({
        risultato : this.state.operazione == "=" ? this.state.risultato :
          this.state.risultato == 0 ? this.state.valore :
        this.state.risultato * parseInt(this.state.valore),

        valore:"",
        operazione:"*"
      })
    }
  };

  buttonDivision = () => {
    {
      this.setState({
        risultato : this.state.operazione == "=" ? this.state.risultato :
          this.state.risultato == 0 ? this.state.valore :
          this.state.risultato / parseInt(this.state.valore),

        valore:"",
        operazione:"/"
      })
    }
  };

  buttonResult = () =>{
    { 
      const risSum = this.state.risultato + parseInt(this.state.valore);
      this.state.operazione == "+" ? this.setState({
        risultato : risSum, 
        valore: risSum,
        operazione:"="
      })
      : {};
      risSub = this.state.risultato - parseInt(this.state.valore);
      this.state.operazione == "-" ? this.setState({
        risultato : risSub, 
        valore: risSub,
        operazione:"="
      })
      : {};
      risMul = this.state.risultato * parseInt(this.state.valore);
      this.state.operazione == "*" ? this.setState({
        risultato : risMul, 
        valore: risMul,
        operazione:"="
      })
      : {};
      risDiv = this.state.risultato / parseInt(this.state.valore);
      this.state.operazione == "/" ? this.setState({
        risultato : risDiv, 
        valore: risDiv,
        operazione:"="
      })
      : {};




      /* this.setState({
        
      }) */
    }
  }

  render() {
    return (
      <View style={styles.container}>
        
        {/* <View>
        <Text style={{alignItems:"center",justifyContent:"center",}}>{this.state.valore}</Text>
        <Text style={{alignItems:"center",justifyContent:"center"}}>{this.state.risultato}</Text>
        </View> */}
        <View style={styles.box}>
          <Text style={[styles.textOfBox]}>{this.state.valore}</Text>
        </View>

        <View style={styles.flex_row}>
          <BtnCalcolatrice value="C" onPress={() => this.buttonReset()}></BtnCalcolatrice>
          <BtnCalcolatrice value="+/-" onPress={() => {alert("Funzione ancora da implementare")}}></BtnCalcolatrice>
          <BtnCalcolatrice value="%" onPress={() => {alert("Funzione ancora da implementare")}}></BtnCalcolatrice>  
          <BtnCalcolatrice value="DEL" onPress={() => this.buttonCancel()}></BtnCalcolatrice>
        </View>

        <View style={styles.flex_row}>
          <BtnCalcolatrice value="7" onPress={() => this.buttonNumberClick("7")}></BtnCalcolatrice>
          <BtnCalcolatrice value="8" onPress={() => this.buttonNumberClick("8")}></BtnCalcolatrice>
          <BtnCalcolatrice value="9" onPress={() => this.buttonNumberClick("9")}></BtnCalcolatrice>  
          <BtnCalcolatrice value="/" onPress={() => this.buttonDivision()}></BtnCalcolatrice>
        </View>

        <View style={styles.flex_row}>
          <BtnCalcolatrice value="4" onPress={() => this.buttonNumberClick("4")}></BtnCalcolatrice>
          <BtnCalcolatrice value="5" onPress={() => this.buttonNumberClick("5")}></BtnCalcolatrice>
          <BtnCalcolatrice value="6" onPress={() => this.buttonNumberClick("6")}></BtnCalcolatrice>  
          <BtnCalcolatrice value="*" onPress={() => this.buttonMultply()}></BtnCalcolatrice>
        </View>

        <View style={styles.flex_row}>
          <BtnCalcolatrice value="1" onPress={() => this.buttonNumberClick("1")}></BtnCalcolatrice>
          <BtnCalcolatrice value="2" onPress={() => this.buttonNumberClick("2")}></BtnCalcolatrice>
          <BtnCalcolatrice value="3" onPress={() => this.buttonNumberClick("3")}></BtnCalcolatrice>  
          <BtnCalcolatrice value="-" onPress={() => this.buttonSubtraction()}></BtnCalcolatrice>
        </View>

        <View style={styles.flex_row}>
          <BtnCalcolatrice value="0" onPress={() => this.buttonNumberClick("0")}></BtnCalcolatrice>
          <BtnCalcolatrice value="." onPress={() => {alert("Funzione ancora da implementare")}}></BtnCalcolatrice>
          <BtnCalcolatrice value="=" onPress={() => this.buttonResult()}></BtnCalcolatrice>  
          <BtnCalcolatrice value="+" onPress={() => this.buttonSum() }></BtnCalcolatrice>
        </View>

        

      </View>
    );
  }
}

/** ADDIZIONE
 * {/* this.state.valore=="0" ? this.setState({ parseInt(this.) })
 *}
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  //  alignItems: 'center',
  //  justifyContent: 'center',
  },
  flex_row:{
    flexDirection:'row'
  },
  flex_center:{
    alignItems:'center',
  },
  flex_center_double:{
    alignItems:'center',
    justifyContent:'center'
  },
  flex_stretch:{
    alignItems:'stretch',
  },
  text:{
    fontSize:25
  },
  box:{
    height:405, //285
    width:null,
    backgroundColor:"lightgray",
    justifyContent:"flex-end",
    alignItems:"flex-end"
  },
  textOfBox:{
    fontSize:70,
    color:"white"
  }
});
