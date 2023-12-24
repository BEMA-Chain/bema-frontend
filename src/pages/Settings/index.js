import { StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  AreaHeaderTitle,
  ArrowBack,
  ArrowBackIcon,
  Container,
  HeaderRegister,
  HeaderTitle,
  LanguageContainer,
  NotificationDescription,
  NotificationTextContainer,
  NotificationTitle,
  PushNotificationContainer,
  SettingsLabelHeading
} from './styles';
import CustomBottomTabs from '../../sharedComponents/CustomBottomTabs';
// import { Dropdown } from 'react-native-element-dropdown';

const languageData = [
  {
    label: "English",
    value: "english"
  },
  {
    label: "Urdu",
    value: "urdu"
  }
]

const Settings = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Container>
      <HeaderRegister>
        <ArrowBack
          onPress={() => { navigation.goBack() }}
          activeOpacity={0.6}
        >
          <ArrowBackIcon source={require('../../assets/ArrowBack.png')} />
        </ArrowBack>
        <AreaHeaderTitle>
          <HeaderTitle>Settings</HeaderTitle>
        </AreaHeaderTitle>
      </HeaderRegister>
      {/* push notifications */}
      <PushNotificationContainer>
        <NotificationTextContainer>
          <NotificationTitle>
            Push Notifications
          </NotificationTitle>
          <NotificationDescription>
            Get Notifications about the latest upload
          </NotificationDescription>
        </NotificationTextContainer>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
          trackColor={{ false: '#767577', true: '#FFF6DA' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        />
      </PushNotificationContainer>
      {/* language */}
      <LanguageContainer>
        <SettingsLabelHeading>
          Language
        </SettingsLabelHeading>
        {/* <Dropdown
          data={languageData}
          maxHeight={300}
          labelField="English"
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          onChange={item => {
            setSelectedValue(item.value)
          }}
          placeholder='Select Language'
        /> */}
      </LanguageContainer>
      {/* about us */}
      <TouchableOpacity onPress={() => navigation.navigate('Aboutus')}>
        <SettingsLabelHeading>
          About us
        </SettingsLabelHeading>
      </TouchableOpacity>
      <CustomBottomTabs />
    </Container>
  )
}

export default Settings;