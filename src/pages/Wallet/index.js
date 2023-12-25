import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AreaHeaderTitle, ArrowBack, ArrowBackIcon, ButtonArea, ButtonText, Container, DollarContainer, HeaderRegister, HeaderTitle, ParentContainer, PointsContainer, PointsText, RedeemPointsText, SendContainer, SendWalletText, Transaction, TransactionContainer, TransactionDescription, TransactionHeading, TransactionImage, TransactionTextContainer, TransactionTitle, WalletMainContainer, WalletText } from "./style";
import { useNavigation } from "@react-navigation/native";

const transactionList = [
    { id: 1, title: "Send", description: "To: 0x7274dh...75GD3A" },
    { id: 2, title: "Withdraw", description: "To: 0x7274dh...75GD3A" },
    { id: 3, title: "Send", description: "To: 0x7274dh...75GD3A" },
    { id: 4, title: "WithDraw", description: "To: 0x7274dh...75GD3A" },
];

const Wallet = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <ScrollView style={{ marginBottom: 90 }}>
                <HeaderRegister>
                    <ArrowBack
                        onPress={() => { navigation.goBack() }}
                        activeOpacity={0.6}
                    >
                        <ArrowBackIcon source={require('../../assets/ArrowBack.png')} />
                    </ArrowBack>
                    <AreaHeaderTitle>
                        <HeaderTitle>Wallet</HeaderTitle>
                    </AreaHeaderTitle>
                </HeaderRegister>

                {/* heading */}
                <ParentContainer>
                    <ButtonArea
                        activeOpacity={0.6}
                    >
                        <ButtonText>Connect Wallet</ButtonText>
                    </ButtonArea>
                    <WalletText>Main Wallet</WalletText>

                    {/* send and dollar container  */}
                    <WalletMainContainer>
                        <SendContainer>
                            <Image source={require("../../assets/Send.png")} />
                            <SendWalletText>Send</SendWalletText>
                        </SendContainer>
                        <DollarContainer>
                            <Image source={require("../../assets/dollar-sign.png")} />
                            <SendWalletText>Withdraw</SendWalletText>
                        </DollarContainer>
                    </WalletMainContainer>
                </ParentContainer>

                {/* points container */}
                <PointsContainer>
                    <View style={{ marginTop: 20 }}>
                        <Image source={require("../../assets/alert-circle.png")} />
                    </View>
                    <PointsText>Points: 1,500 bemas</PointsText>
                    <RedeemPointsText>Redeem Points</RedeemPointsText>
                </PointsContainer>

                {/*  */}
                <TransactionHeading>Transaction History</TransactionHeading>
                {transactionList.map((transactionItem) => (
                    <TransactionContainer key={transactionItem.id}>
                        <Transaction key={transactionItem.id}>
                            <TransactionImage
                                source={require("../../assets/dollar-sign.png")}
                            />
                            <TransactionTextContainer>
                                <TransactionTitle
                                    numberOfLines={2}
                                >
                                    {transactionItem.title}
                                </TransactionTitle>
                                <TransactionDescription
                                    numberOfLines={2}
                                >
                                    {transactionItem.description}
                                </TransactionDescription>
                            </TransactionTextContainer>

                            <TransactionDescription
                                numberOfLines={2}
                            >
                                0.005ETH
                            </TransactionDescription>
                        </Transaction>
                    </TransactionContainer>
                ))}

                <WalletMainContainer>
                    <TouchableOpacity>
                        <SendContainer>
                            <SendWalletText>How it Works</SendWalletText>
                        </SendContainer>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <DollarContainer>
                            <SendWalletText>Terms of use</SendWalletText>
                        </DollarContainer>
                    </TouchableOpacity>

                </WalletMainContainer>

            </ScrollView>

        </Container>
    )
};

export default Wallet;