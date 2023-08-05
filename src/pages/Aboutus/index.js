import { useNavigation } from '@react-navigation/native';
import {
  AboutUsListDescription,
  AboutUsListTitle,
  AboutusList,
  AreaHeaderTitle,
  ArrowBack,
  ArrowBackIcon,
  Container,
  HeaderRegister,
  HeaderTitle
} from './styles';

const aboutUsList = [
  {
    id: 1,
    title: "BEMA Terms and condition",
    description: "Read BEMA’s Terms and Conditions"
  },
  {
    id: 2,
    title: "Privacy policy",
    description: "Software that helped us"
  },
  {
    id: 3,
    title: "Third-party software",
    description: "Software that helped us"
  },
  {
    id: 4,
    title: "Version",
    description: "8.33.234"
  },
]

const Aboutus = () => {
  const navigation = useNavigation();
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
          <HeaderTitle>About BEMA</HeaderTitle>
        </AreaHeaderTitle>
      </HeaderRegister>
      {/* about us list */}
      {aboutUsList.map((aboutusItem) => (
        <AboutusList key={aboutusItem.id}>
          <AboutUsListTitle>{aboutusItem.title}</AboutUsListTitle>
          <AboutUsListDescription>{aboutusItem.description}</AboutUsListDescription>
        </AboutusList>
      ))}
    </Container>
  )
};

export default Aboutus;