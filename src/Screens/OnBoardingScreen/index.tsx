import React, { useState, useRef } from "react";
import { Dimensions, SafeAreaView, View, StyleSheet } from "react-native";
import SVG from "../../assets/Images/SVG/SVG";
import TextButton from "../../components/TextButton";
import TextAura from "../../Wrappers/TextAura";
import OnBoardingHeader from "./OnBoardingHeader";
import PagerView from "react-native-pager-view";
import Fonts from "../../assets/fonts/Fonts";

const DATA = [
  {
    id: "1",
    title: "Here to support your co-parenting journey",
    image: <SVG.OnBoarding1 />
  },
  {
    id: "2",
    title: "Here you can share your child's calendar",
    image: <SVG.OnBoarding2 />
  },
  {
    id: "3",
    title: "Here you can manage your child's tasks",
    image: <SVG.OnBoarding3 />
  },
  {
    id: "4",
    title: "Here you can do secure messaging",
    image: <SVG.OnBoarding4 />
  }
];

const OnboardingScreen = ({ navigation, route }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = Dimensions.get("window");
  const pagerViewRef = useRef(null);

  const renderItem = (item: any) => {
    return (
      <View style={[styles.itemContainer, { width }]}>
        {item.image}
        <TextAura style={styles.itemTitle}>{item.title}</TextAura>
      </View>
    );
  };

  const handleNavigate = () => {
    navigation?.replace("GetStartedScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <OnBoardingHeader onPress={handleNavigate} />

      <PagerView
        style={[styles.pagerView, { width }]}
        initialPage={0}
        onPageSelected={(e) => {
          console.log(e.nativeEvent.position);
          setCurrentIndex(e.nativeEvent.position);
        }}
        ref={pagerViewRef}
      >
        {DATA.map((item) => (
          <View key={item.id} style={styles.pagerItem}>
            {renderItem(item)}
          </View>
        ))}
      </PagerView>

      {/* Custom pagination dots */}
      <View style={styles.paginationContainer}>
        {DATA.map((_, i) => {
          const isActive = i === currentIndex;
          return (
            <View
              key={i}
              style={[
                styles.dot,
                isActive ? styles.activeDot : styles.inactiveDot
              ]}
            />
          );
        })}
      </View>

      <View style={styles.buttonContainer}>
        <TextButton
          onPress={() => {
            if (currentIndex === DATA.length - 1) {
              handleNavigate();
            } else {
              const nextIndex = currentIndex + 1;
              setCurrentIndex(nextIndex);
              pagerViewRef.current?.setPage(nextIndex);
            }
          }}
          title={currentIndex === DATA.length - 1 ? "GET STARTED" : "NEXT"}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    height: "100%"
  },
  itemTitle: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: Fonts.Inter_Regular,
    fontWeight: "700",
    marginHorizontal: 30
  },
  pagerView: {
    flex: 1
  },
  pagerItem: {
    flex: 1
  },
  paginationContainer: {
    flexDirection: "row",
    marginBottom: 40
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5
  },
  activeDot: {
    width: 30,
    backgroundColor: "rgba(57, 20, 72, 1)",
    opacity: 1
  },
  inactiveDot: {
    width: 10,
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.3
  },
  buttonContainer: {
    padding: 10,
    width: "100%"
  }
});
