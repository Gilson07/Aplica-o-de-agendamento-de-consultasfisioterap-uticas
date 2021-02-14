import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../../pages/Main';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import OccupationalProfile from '../../pages/OccupationalProfile';
import Query from '../../pages/Query';
import Specialty from '../../pages/Specialty';
import Modality from '../../pages/Modality';
import Specialist from '../../pages/Specialist';
import QueryPayment from '../../pages/QueryPayment';
import QueryFisioForm from '../../pages/QueryFisioForm';
import QueryAvailableCities from '../../pages/QueryAvailableCities';
import Scheduling from '../../pages/Scheduling';
import AppointmentCreated from '../../pages/AppointmentCreated';
import Tab from '../../routes/Tab';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator 
    screenOptions={{ headerShown: false, 
      cardStyle:{backgroundColor: '#EDEDED'}
    }}
  >
    <Auth.Screen name="Main" component={Main}/>
    <Auth.Screen name="SignIn" component={SignIn}/>
    <Auth.Screen name="SignUp" component={SignUp}/>
    <Auth.Screen name="OccupationalProfile" component={OccupationalProfile}/>
    <Auth.Screen name="Query" component={Query}/>
    <Auth.Screen name="Specialty" component={Specialty}/>
    <Auth.Screen name="Modality" component={Modality}/>
    <Auth.Screen name="Specialist" component={Specialist}/>
    <Auth.Screen name="QueryPayment" component={QueryPayment}/>
    <Auth.Screen name="QueryFisioForm" component={QueryFisioForm}/>
    <Auth.Screen name="QueryAvailableCities" component={QueryAvailableCities}/>
    <Auth.Screen name="Scheduling" component={Scheduling}/>
    <Auth.Screen name="AppointmentCreated" component={AppointmentCreated}/>
    <Auth.Screen name="Tab" component={Tab}/>

  </Auth.Navigator>
);

export default AuthRoutes;