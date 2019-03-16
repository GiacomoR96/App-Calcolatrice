import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import CalcButton from "./components/CalcButton"

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      operando: false,
      operazione: "0"
      
    }
  }

  concatOperation(props){
    const { operazione, operando } = this.state;

      if(operazione === "0"){
        if(props === "0") {this.setState({operazione:props})}
        else if(props >= "0" && props<="9") {this.setState({operazione:props})} 
        else {this.setState({operazione:operazione.concat(props)})} 
      }
      else{
        switch(props){
          case ".": {
            if(operando === true) {this.setState({operazione:operazione.substr(0,operazione.length-1).concat(props)})}
            else {
              this.setState({operazione:operazione.concat(props),operando:true})
            }
            break;
          }
          case "/": {
            if(operando === true) {this.setState({operazione:operazione.substr(0,operazione.length-1).concat(props)})}
            else {
              this.setState({operazione:operazione.concat(props),operando:true})
            }
            break;
          }
          case "*": {
            if(operando === true) {this.setState({operazione:operazione.substr(0,operazione.length-1).concat(props)})}
            else {
              this.setState({operazione:operazione.concat(props),operando:true})
            }
            break;
          }
          case "-": {
            if(operando === true) {this.setState({operazione:operazione.substr(0,operazione.length-1).concat(props)})}
            else {
              this.setState({operazione:operazione.concat(props),operando:true})
            }
            break;
          }
          case "+": {
            if(operando === true) {this.setState({operazione:operazione.substr(0,operazione.length-1).concat(props)})}
            else {
              this.setState({operazione:operazione.concat(props),operando:true})
            }
            break;
          }
          default: {
            this.setState({operazione:operazione.concat(props),operando:false})
          }
        }
      }
      
      /* operazione : operazione === "0" ? (props === "0" ? props : (props >= "0" && props<="9" ? props : operazione.concat(props))) : 
                ( props === "." ? (operazione.substr(operazione.length-1,operazione.length)===(".") ? operazione : operazione.concat(props) ) : 
                  props === "/" ? (operazione.substr(operazione.length-1,operazione.length)===("/") ? operazione : operazione.concat(props) ) :
                  props === "*" ? (operazione.substr(operazione.length-1,operazione.length)===("*") ? operazione : operazione.concat(props) ) :
                  props === "-" ? (operazione.substr(operazione.length-1,operazione.length)===("-") ? operazione : operazione.concat(props) ) :
                  props === "+" ? (operazione.substr(operazione.length-1,operazione.length)===("+") ? operazione : operazione.concat(props) ) :
                  operazione.concat(props) ) */
                /* (props === ("." || "/" || "*" || "-" || "+") ? (operazione.substr(operazione.length-1,operazione.length)===("." || "/" || "*" || "-" || "+") ? "operazione" : operazione.concat(props)) : operazione.concat(props) ) */
      /* operazione : operazione === "0" ? (props >= "0" && props<="9" ? props : operazione.concat(props)) : operazione.concat(props) */
    
  }

  deleteOperation(){
    const { operazione } = this.state;
    this.setState({
      operazione : "0"
    })
  }

  delLastOperation(){
    const { operando, operazione } = this.state;
    var tmp = operazione.substr(operazione.length-1,operazione.length);
    if(parseInt(tmp)>=0 && parseInt(tmp)<=9)  {
      tmp = operazione.substr(operazione.length-2,operazione.length-2)
    }
    switch(tmp){
      case ".":{
        this.setState({operando:true});
        break;
      }
      case "/":{
        this.setState({operando:true});
        break;
      }
      case "*":{
        this.setState({operando:true});
        break;
      }
      case "-":{
        this.setState({operando:true});
        break;
      }
      case "+":{
        this.setState({operando:true});
        break;
      }
    }
    
    this.setState({
      operazione: operazione.length==1 ? (operazione!="0" ? "0" : "0") : operazione.substr(0,operazione.length-1)
    })
  }

  findPrevOperation(partialRis){
    var tmp;
    var i=partialRis.length-1;
    for(;i>=0;i--){
      tmp = partialRis.charAt(i-1);
      if(tmp=="/") break;
      else if(tmp=="*") break;
      else if(tmp=="-") break;
      else if(tmp=="+") break;
    }

    if(i===(-1)) {i=0;}
    return i;
  }

  findNextOperation(partialRis){
    var tmp;
    var i=0;
    for(;(i<partialRis.length );i++){
      tmp = partialRis.charAt(i);
      if(tmp=="/") break;
      else if(tmp=="*") break;
      else if(tmp=="-") break;
      else if(tmp=="+") break;
    }

    if(i===(-1)) {i=partialRis.length;}
    return i;
  }

  setRis(ris){
    const { operazione } = this.state;
    this.setState({
      operazione : ris
    })
  }

  resultCalculation(){
    const { operazione } = this.state;

    var cond=-1;
    var indexSx,indexDx;
    var x, y, ris,tmp,finalRis;
    var fine = false;
    var ciclo=0;

    for(var i=0;i<operazione.length;i++){
      if(operazione.charAt(i)=="/") ciclo++;
      if(operazione.charAt(i)=="*") ciclo++;
      if(operazione.charAt(i)=="-") ciclo++;
      if(operazione.charAt(i)=="+") ciclo++;
    }
    finalRis = operazione;
    for(var j=0; !fine && j<ciclo;j++){
      cond = finalRis.indexOf("/");
      if(cond!=(-1)){
        console.log("/ ->COND: ",cond)
        indexSx = this.findPrevOperation(finalRis.substr(0,cond+1));
        indexDx = this.findNextOperation(finalRis.substr(cond+1,finalRis.length));
        
        x=parseFloat(finalRis.substr(indexSx,cond-indexSx));
        y=parseFloat(finalRis.substr(cond+1,indexDx));
        if(y==0){
          fine = true;
          finalRis = "0" //∞  - Questo valore equivale all'infinito (per comodità si è scelto di utilizzare lo 0 per facilitare i calcoli)
        }
        else{
          tmp = x/y;
        /*
        console.log("PRIMO PARTE ",finalRis.substr(0,indexSx));
        console.log("Parte Calcolata ",String(tmp));
        console.log("SECONDO PARTE ",finalRis.substr((cond+1+indexDx),finalRis.length));
        */
        
          ris = finalRis.substr(0,indexSx) + String(tmp) + finalRis.substr(cond+1+indexDx,finalRis.length);
        }
      }
      if(cond==(-1)){
        cond = finalRis.indexOf("*");
        if(cond!=(-1)){
          console.log("* ->COND: ",cond)
          indexSx = this.findPrevOperation(finalRis.substr(0,cond+1));
          indexDx = this.findNextOperation(finalRis.substr(cond+1,finalRis.length));
          x=parseFloat(finalRis.substr(indexSx,cond-indexSx));
          y=parseFloat(finalRis.substr(cond+1,indexDx));
          
          tmp = x*y;
          
          ris = finalRis.substr(0,indexSx) + String(tmp) + finalRis.substr(cond+1+indexDx,finalRis.length);
        }
      }
      if(cond==(-1)){
        cond = finalRis.indexOf("-");
        if(cond!=(-1)){
          console.log("- ->COND: ",cond)
          indexSx = this.findPrevOperation(finalRis.substr(0,cond+1));
          indexDx = this.findNextOperation(finalRis.substr(cond+1,finalRis.length));
          x=parseFloat(finalRis.substr(indexSx,cond-indexSx));
          y=parseFloat(finalRis.substr(cond+1,indexDx));
          tmp = x-y;
          ris = finalRis.substr(0,indexSx) + String(tmp) + finalRis.substr(cond+1+indexDx,finalRis.length);
        }
      }
      if(cond==(-1)){
        cond = finalRis.indexOf("+");
        if(cond!=(-1)){
          console.log("+ ->COND: ",cond)
          indexSx = this.findPrevOperation(finalRis.substr(0,cond+1));
          indexDx = this.findNextOperation(finalRis.substr(cond+1,finalRis.length));
          x=parseFloat(finalRis.substr(indexSx,cond-indexSx));
          y=parseFloat(finalRis.substr(cond+1,indexDx));
          
          tmp = x+y;
          
          ris = finalRis.substr(0,indexSx) + String(tmp) + finalRis.substr(cond+1+indexDx,finalRis.length);
        }
      }

      finalRis = ris;
      
    }
  
    if(fine==false){
      this.setState({
        operazione : finalRis
      })
    }
    
    
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.display}>
          <Text style={styles.displayText}>{this.state.operazione}</Text>
        </View>

        <View style={styles.containerButton}>
          <CalcButton value="C" onPress={() => this.deleteOperation()} />
          <CalcButton value="+/-" onPress={() => alert("Funzione ancora da implemetare!")} />
          <CalcButton value="%" onPress={() => alert("Funzione ancora da implemetare!")} />
          <CalcButton value="DEL" onPress={() => this.delLastOperation()} />
        </View>


        <View style={styles.containerButton}>
          <CalcButton value="7" onPress={() => this.concatOperation("7")} />
          <CalcButton value="8" onPress={() => this.concatOperation("8")} />
          <CalcButton value="9" onPress={() => this.concatOperation("9")} />
          <CalcButton value="/" onPress={() => this.concatOperation("/")} />
        </View>

        <View style={styles.containerButton}>
          <CalcButton value="4" onPress={() => this.concatOperation("4")} />
          <CalcButton value="5" onPress={() => this.concatOperation("5")} />
          <CalcButton value="6" onPress={() => this.concatOperation("6")} />
          <CalcButton value="*" onPress={() => this.concatOperation("*")} />
        </View>

        <View style={styles.containerButton}>
          <CalcButton value="1" onPress={() => this.concatOperation("1")} />
          <CalcButton value="2" onPress={() => this.concatOperation("2")}/>
          <CalcButton value="3" onPress={() => this.concatOperation("3")} />
          <CalcButton value="-" onPress={() => this.concatOperation("-")} />
        </View>
        
        <View style={styles.containerButton}>
          <CalcButton value="0" onPress={() => this.concatOperation("0")} />
          <CalcButton value="." onPress={() => this.concatOperation(",")} />
          <CalcButton value="=" onPress={() => this.resultCalculation()} />
          <CalcButton value="+" onPress={() => this.concatOperation("+")} />
        </View>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  display: {
    backgroundColor: 'darkcyan',
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  displayText: {
    color: 'white',
    fontSize:48,
  },
  containerButton:{
    flexDirection:"row",
  },
  
});
