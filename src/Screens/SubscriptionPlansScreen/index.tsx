import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderProvider from "../../Provider/HeaderProvider";
import TextAura from "../../Wrappers/TextAura";
import TextButton from "../../components/TextButton";
import Colors from "../../assets/Colors";

const SubscriptionPlansScreen = ({ navigation }: any) => {
  const handleNextPress = () => {
    navigation.navigate("SubscriptionPlansScreen");
  };

  const renderPlan = (planName: string, price: string, isPopular?: boolean) => (
    <View style={styles.planContainer}>
      <TextAura style={styles.planName}>{planName}</TextAura>
      <TextAura style={styles.planPrice}>{price}</TextAura>
      <TextButton
        textStyle={styles.buyButtonText}
        style={styles.buyButton}
        title="BUY NOW"
      />

      {isPopular && (
        <View style={styles.popularBadge}>
          <TextAura style={styles.popularText}>Most Popular</TextAura>
        </View>
      )}
    </View>
  );

  return (
    <HeaderProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextAura style={styles.title}>Subscription Plans</TextAura>
          <TextAura style={styles.subtitle}>
            You need to buy 1 of our plans to use the app.
          </TextAura>
          <View style={styles.plansWrapper}>
            {renderPlan("Monthly Plan", "$ 4.99", true)}
            {renderPlan("Annual Plan", "$ 49.99")}
          </View>
        </View>
      </View>
    </HeaderProvider>
  );
};

export default SubscriptionPlansScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },
  headerContainer: {
    alignItems: "center"
  },
  title: {
    color: Colors.Headings,
    fontWeight: "700",
    fontSize: 24,
    marginVertical: 30,
    textAlign: "center"
  },
  subtitle: {
    color: "#5B5B5B",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 30,
    lineHeight: 21
  },
  plansWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  },
  planContainer: {
    backgroundColor: Colors.SecoundryColor,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "45%",
    height: 221,
    paddingVertical: 20
  },
  planName: {
    color: "rgba(91, 91, 91, 1)",
    fontWeight: "600",
    fontSize: 16
  },
  planPrice: {
    color: "rgba(152, 114, 63, 1)",
    fontSize: 20,
    fontWeight: "800"
  },
  buyButton: {
    marginBottom: 20,
    width: 129
  },
  buyButtonText: {
    fontWeight: "500"
  },
  popularBadge: {
    position: "absolute",
    backgroundColor: "rgba(152, 114, 63, 1)",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    top: -10
  },
  popularText: {
    color: "#FFFFFF",
    fontSize: 10
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 10
  }
});
