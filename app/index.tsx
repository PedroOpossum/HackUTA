import {SafeAreaView, StyleSheet, View, Text, StatusBar, FlatList,Image, ScrollView} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function Page() {
  return (
    
    <View style={styles.container}>
      <View style ={styles.hello}>

   
      
        <ScrollView horizontal = {true}>
 
        <Image 
          style={{width: 400, height: 400, marginRight: "5%",}}
          source={{uri: 'https://cdn.mobygames.com/covers/4840533-yakuza-playstation-2-front-cover.jpg'}}
          />
          <Image 
          style={{width: 400, height: 400,marginRight: "5%"}}
          source={{uri: 'https://www.lukiegames.com/assets/images/PS2/ps2_resident_evil_4_premium_edition-110214.jpg'}}
          />
          <Image 
          style={{width: 400, height: 400,marginRight: "5%"}}
          source={{uri: 'https://i.pinimg.com/originals/a9/f7/64/a9f764c758033814e05b658629351e5a.jpg'}}
          />
          <Image 
          style={{width: 400, height: 400,marginRight: "5%"}}
          source={{uri: 'https://static.tvtropes.org/pmwiki/pub/images/siren_ps2_na_cover.jpg'}}
          />

          <Image 
          style={{width: 400, height: 400,marginRight: "5%"}}
          source={{uri: 'https://www.lukiegames.com/assets/images/PS2/ps2_grand_theft_auto_san_andreas-110214.jpg'}}
          />
          <Image 
          style={{width: 400, height: 400,marginRight: "5%"}}
          source={{uri: 'https://assets.altarofgaming.com/wp-content/uploads/2022/05/kami-playstation-2-north-america-cover-altar-of-gaming-2748-724x1024.jpg'}}
          />

          <Image 
          style={{width: 400, height: 400,marginRight: "5%"}}
          source={{uri: 'https://cdn2.spong.com/pack/g/o/godofwar2237772l/_-God-of-War-2-PS2-_.jpg'}}
          />

          <Image 
          style={{width: 400, height: 400,marginRight: "5%"}}
          source={{uri: 'https://cdn.mobygames.com/covers/4168303-katamari-damacy-playstation-2-front-cover.jpg'}}
          />


          <Image 
          style={{width: 400, height: 400,marginRight: "10%"}}
          source={{uri: 'https://r.mprd.se/fup/up/151735-Metal_Gear_Solid_3_-_Snake_Eater_(Japan)_(SLPM-65790)-3.jpg'}}
          />

          <Image 
          style={{width: 400, height: 400,marginRight: "10%"}}
          source={{uri: 'https://bdjogos.com.br/capas/4015-Kingdom-Hearts-II-Playstation-2-capa-1.jpg'}}
          />
          </ScrollView>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  hello: {
    flex: 1,
   
    flexDirection: 'row',
    alignItems:"center",

  },

  container: {
    
    backgroundColor: 'white',
    borderColor: "grey",
    borderWidth:120,
    width: '100%',
    height: "100%",
    aspectRatio: 1,
   
    

  }
  
  p.solid{border-style: solid; }


});
