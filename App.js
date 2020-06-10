import React, {Component} from 'react';
import {Platform, View, Text, StyleSheet,Image,TextInput,ScrollView } from 'react-native';
import Constants  from 'expo-constants';

export default class App extends Component{
 
    render(){
        return(

            <View style={styles.container}>

                <ScrollView style={styles.contents}>
                    <View style={{position:'relative', marginHorizontal:12,}}>
                          <TextInput placeholder="What do you want to eat?" style={styles.txtSearch} />
                          <Image style={{width:17,height:17,position:'absolute',top:12,left:17,}} source={require('./assets/img-search/search.png')} />
                    </View>

                    <View style={{marginTop:8, marginHorizontal:12,}}>  
                        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#2C5FB8',borderTopLeftRadius:4,borderTopRightRadius:4,padding:14}}>
                           <Image source={require('./assets/gojek/gopay.png')} />
                            <Text style={{color:'white',fontWeight:'bold',fontSize:17,}}>Rp54.000</Text>
                        </View>

                        <View style={{flexDirection:'row',paddingTop:20,paddingBottom:14,backgroundColor:'#2F65BD',borderBottomLeftRadius:4,borderBottomRightRadius:4,}}>
                             <View style={styles.boxCenter}>
                                <Image source={require('./assets/gojek/pay.png')} style={styles.imgCenter} />
                                <Text style={styles.txtCenter}>Pay</Text>
                             </View>
                              <View style={styles.boxCenter}>
                                <Image source={require('./assets/gojek/nearby.png')}  style={styles.imgCenter} />
                                <Text style={styles.txtCenter}>Nearby</Text>
                             </View>
                              <View style={styles.boxCenter}>
                                <Image source={require('./assets/gojek/topup.png')} style={styles.imgCenter} />
                                <Text style={styles.txtCenter}>Top Up</Text>
                             </View>
                              <View style={styles.boxCenter}>
                                <Image source={require('./assets/gojek/more.png')} style={styles.imgCenter} />
                                <Text style={styles.txtCenter}>More</Text>
                             </View>
                        </View>
                    </View>


                    <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:18,justifyContent:'space-between', marginHorizontal:12,}}>

                          <View style={styles.boxCenterParent}>
                                <View style={styles.boxContents}>
                                <Image source={require('./assets/gojek/go-ride.png')} style={styles.imgContents} />
                               
                              </View>
                              <Text style={styles.caption}>
                                  GO-RIDE
                              </Text>
                          </View>

                       <View style={styles.boxCenterParent}>
                        <View style={styles.boxContents}>
                           <Image source={require('./assets/gojek/go-car.png')} style={styles.imgContents} />
                          
                        </View>
                       <Text style={styles.caption}>
                        GO-CAR
                        </Text>
                       </View>

                      <View style={styles.boxCenterParent}>
                        <View style={styles.boxContents}>
                          <Image source={require('./assets/gojek/go-bluebird.png')} style={styles.imgContents} />
                          
                        </View>
                       <Text style={styles.caption}>
                        GO-BLUEBIRD
                        </Text>
                          </View>

                      <View style={styles.boxCenterParent}>
                        <View style={styles.boxContents}>
                          <Image source={require('./assets/gojek/go-send.png')} style={styles.imgContents} />
                          
                        </View>
                       <Text style={styles.caption}>
                        GO-SEND
                        </Text>
                      </View>

                     <View style={styles.boxCenterParent}>
                    <View style={styles.boxContents}>
                          <Image source={require('./assets/gojek/go-deals.png')} style={styles.imgContents} />
                         
                        </View>
                       <Text style={styles.caption}>
                        GO-DEALS
                        </Text>
                     </View>

                    <View style={styles.boxCenterParent}>
                        <View style={styles.boxContents}>
                          <Image source={require('./assets/gojek/go-pulsa.png')} style={styles.imgContents} />
                          
                        </View>
                       <Text style={styles.caption}>
                        GO-PULSA
                        </Text>
                      </View>

                         <View style={styles.boxCenterParent}>
                        <View style={styles.boxContents}>
                          <Image source={require('./assets/gojek/go-food.png')} style={styles.imgContents} />
                          
                        </View>
                         <Text style={styles.caption}>
                          GO-FOOD
                          </Text>
                      </View>

                         <View style={styles.boxCenterParent}>
                        <View style={styles.boxContents}>
                          <Image source={require('./assets/gojek/go-more.png')} style={styles.imgContents} />
                          
                        </View>
                         <Text style={styles.caption}>
                          MORE</Text>
                      </View>
                        
                    </View>

                    <View style={{height:17,backgroundColor:'#F2F2F4',}}></View>

                    <View style={{marginHorizontal:18,paddingTop:10,paddingBottom:50}}>
                        <View style={styles.boxImgNews}>
                            <Image source={require('./assets/news/sepak-bola.jpg')} style={styles.imgNews} />
                        </View>
                        <View style={{paddingTop:16}}>
                              <Text style={{fontSize:16, fontWeight:'bold'}}>GO-NEWS</Text>
                              <Text style={{color:'grey',}}>Dimas Drajat menyelamatkan timnas U-23 </Text>
                        </View>
                    </View>
                    <View style={{marginHorizontal:18,paddingTop:10,paddingBottom:50}}>
                        <View style={styles.boxImgNews}>
                            <Image source={require('./assets/news/sepak-bola.jpg')} style={styles.imgNews} />
                        </View>
                        <View style={{paddingTop:16}}>
                              <Text style={{fontSize:16, fontWeight:'bold'}}>GO-NEWS</Text>
                              <Text style={{color:'grey',}}>Dimas Drajat menyelamatkan timnas U-23 </Text>
                        </View>
                    </View>
                </ScrollView>

                
                <View style={[styles.tabs,{borderTopColor:'whitesmoke',borderTopWidth:1,}]}>
                    <View style={[styles.tabContents,{backgroundColor:'white'}]}> 
                        <Image style={styles.imgTab} source={require('./assets/gojek/home.png')} />
                        <Text style={styles.txtTabs}>Home</Text>
                    </View>
                     <View style={[styles.tabContents,{backgroundColor:'white'}]}> 
                        <Image style={styles.imgTab} source={require('./assets/gojek/order.png')} />
                        <Text style={styles.txtTabs}>Orders</Text>
                    </View>
                     <View style={[styles.tabContents,{backgroundColor:'white'}]}> 
                        <Image style={styles.imgTab} source={require('./assets/gojek/help.png')} />
                        <Text style={styles.txtTabs}>Help</Text>
                    </View>
                     <View style={[styles.tabContents,{backgroundColor:'white'}]}> 
                       <Image style={styles.imgTab} source={require('./assets/gojek/inbox.png')} />
                        <Text style={styles.txtTabs}>Inbox</Text>
                    </View>
                     <View style={[styles.tabContents,{backgroundColor:'white'}]}> 
                        <Image style={styles.imgTab} source={require('./assets/gojek/account.png')} />
                        <Text style={styles.txtTabs}>Accounts</Text>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
     marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
     backgroundColor:'white',
  },
  contents:{
    flex:1,
    backgroundColor:'white',
   
    paddingTop:15,
  },
  tabs:{
    height:54,
    backgroundColor:'whitesmoke',
    flexDirection:'row',
  },
  tabContents:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  imgTab:{
    width:25,
    height:25,
  },
  txtTabs:{
    fontSize:10,
    color:'#545454',
    marginTop:4,
  },
  txtSearch:{
    borderWidth:1,
    borderRadius:25,
    borderColor:'#E8E8E8',
    height:40,
    fontSize:12,
    paddingLeft:45,
    paddingRight:14,
    backgroundColor:'white',
  },
  boxCenter:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  txtCenter:{
    color:'white',
    fontSize:13,
    fontWeight:'bold',
    marginTop:15,
  },
  boxCenterParent:{
    marginBottom:15,
  },
  boxContents:{
    width:68,
    height:68,
    borderWidth:1,
    borderColor:'#EFEFEF',
    borderRadius:18,
    justifyContent:'center',
    alignItems:'center',
    
  },
  caption:{
    fontSize:11,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:6,
    color:'#545454',
    
  },
  boxImgNews:{
    height:170,
    flex:1,
   paddingBottom:40,
  },
  imgNews:{
    height:170,
    width:'100%',
    borderRadius:10,
  }
});