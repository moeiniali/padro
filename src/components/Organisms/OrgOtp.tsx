import React from 'react';
import { Button, Form, Input } from 'antd';
import { MlHeaderCards, OrgTimer } from '../ExAllCo';
import { useNavigate } from 'react-router-dom';
import { notifySuccess, notifyError } from '../../utils/notify';
import type { FormProps, GetProps } from 'antd';
import './Organism.css';
import { useSelector } from 'react-redux';
import userSlice from '../../redux/slices/userSlice';
import { RootState } from '../../redux/store';

// Define the prop types for the OTP input
type OTPProps = GetProps<typeof Input.OTP>;
// Define the form field types
type FieldType = {
  otpCode?: string;
}

const OrgOtp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const phonNumber = useSelector((state: RootState) => state.user.phonNumber)
  const remainingTime = useSelector((state: RootState) => state.timer.remainingTime)




  // Handle OTP input change
  const onChange: OTPProps['onChange'] = (otp) => {
    // Add any necessary logic for OTP input chang
    console.log(otp);
  };

  // Shared props for the OTP input
  const sharedProps: OTPProps = {
    onChange,
  };

  // Handle form submission
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const validCode = '1111';
    const value = values.otpCode;
    if (value && value === validCode) {
      notifySuccess('ثبت نام شما با موفقیت انجام شد.');
      setTimeout(() => {
        navigate('/IpLocation');
      }, 2000);
    } else {
      notifyError('کد تایید وارد شده صحیح نمیباشد')
    }

    form.resetFields()
  };




// Validation rules for OTP input
  const otpRules = [
    { required: true, message: 'لطفا کد تایید را وارد نمایید' },

  ];




  return (
    <div className='w-[375px] max-h-[410px] bg-white rounded-lg py-4 px-4 border'>
      <MlHeaderCards
        Element='otp'
        titleI='کد تایید را وارد کنید'
        titleII={` کد تایید برای شماره ${phonNumber} پیامک شد`}
        Link='تغییر شماره همراه'
        href='/'
        onClick={() => navigate('/')}

      />
      <Form
        form={form}
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ display: 'flex', flexDirection: 'column', gap: '8px', }}
      >
        <Form.Item<FieldType>
          className='m-auto mb-6 flex justify-center items-center '
          name="otpCode"
          rules={otpRules}
          style={{ direction: 'ltr' }}
        >
          <Input.OTP style={{ width: '300px', margin: ' 0 auto' }} inputMode='numeric' length={4} variant="outlined" autoFocus formatter={(str) => str.toUpperCase()}
            {...sharedProps} />


        </Form.Item>
        <OrgTimer />


        <Form.Item style={{ textAlign: 'center', fontSize: '14px', fontWeight: 400, color: '#313235' }}>
          <Button disabled={remainingTime <= 0 ? true : false} size='large' block type="primary" htmlType="submit" className='mb-4'>
            تایید
          </Button>
          <p className='text-sm font-normal text-[#313235]'>
            حساب کاربری ندارید؟ <a href="#" className='font-medium text-sm text-[#1043A6]'>ثبت نام</a>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
}

export default OrgOtp;
