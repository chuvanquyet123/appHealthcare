import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView,SafeAreaView } from 'react-native';

const ProfileMedical = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>MẪU HỒ SƠ BỆNH NGHỀ NGHIỆP</Text>
      <Text style={styles.subtitle}>
        (Ban hành kèm theo Thông tư số 28/2016/TT-BYT ngày 30 tháng 6 năm 2016 của Bộ trưởng Bộ Y tế)
      </Text>

      <View style={styles.section}>
        <Text style={styles.label}>CƠ QUAN CHỦ QUẢN</Text>
        <Text style={styles.labelRight}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>TÊN CƠ QUAN, ĐƠN VỊ</Text>
        <Text style={styles.labelRight}>Độc lập - Tự do - Hạnh phúc</Text>
      </View>

      <Text style={styles.formTitle}>HỒ SƠ BỆNH NGHỀ NGHIỆP</Text>
      <Text style={styles.formNumber}>Hồ sơ số ____________________________</Text>

      {/** Form Fields **/}
      <View style={styles.field}>
        <Text style={styles.label}>Họ và tên bệnh nhân:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Giới tính:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Ngày, tháng, năm sinh:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Số CMND/căn cước công dân:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Nghề hoặc công việc:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Tuổi nghề:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Chỗ ở hiện tại:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Số hồ sơ khám sức khỏe phát hiện bệnh nghề nghiệp:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Tên cơ sở lao động:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Phân xưởng/tổ tại lao động:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Địa chỉ của cơ sở lao động:</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Điện thoại:</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Số Fax:</Text>
        <TextInput style={styles.input} />
      </View>

      <Text style={styles.footer}>Năm ____________________________</Text>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#3795BD",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
  },
  labelRight: {
    fontSize: 14,
    textAlign: 'right',
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  formNumber: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  field: {
    marginBottom: 12,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingVertical: 4,
    marginTop: 4,
  },
  footer: {
    fontSize: 14,
    textAlign: 'right',
    marginTop: 16,
  },
});

export default ProfileMedical;