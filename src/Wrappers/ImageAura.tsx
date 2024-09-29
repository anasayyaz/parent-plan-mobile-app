import React from "react";
import {
  Image as RNImage,
  ImageProps,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  View,
  ViewStyle
} from "react-native";
import FastImage, { FastImageProps, Source } from "react-native-fast-image";

interface ImageAuraProps extends Omit<ImageProps, "source"> {
  containerStyle?: ViewStyle;
  source: ImageSourcePropType | Source;
}

const ImageAura: React.FC<ImageAuraProps> = ({
  style,
  containerStyle,
  source,
  ...props
}) => {
  const ImageComponent = FastImage;

  const imageSource =
    Platform.OS === "ios" && (source as any).uri
      ? { uri: (source as any).uri, priority: FastImage.priority.high }
      : source;

  return (
    <View style={[styles.container, containerStyle]}>
      <ImageComponent
        style={[styles.image, style]}
        //@ts-ignore
        source={imageSource}
        {...props}
      />
    </View>
  );
};

export default ImageAura;

const styles = StyleSheet.create({
  container: {},
  image: {}
});
