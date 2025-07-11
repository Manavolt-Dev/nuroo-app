import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import tw from '@/lib/design/tw';

interface InfoCardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function InfoCard({ children, style }: InfoCardProps) {
  return <View style={[styles.card, tw`p-6`, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
});
