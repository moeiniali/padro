import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { MlHeaderCards } from '../ExAllCo';
import { useNavigate } from 'react-router-dom';
import { notifySuccess, notifyError } from '../../utils/notify';
import type { FormProps } from 'antd';
import './Organism.css';
import { AppDispatch, RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';

type FieldType = {
  phonNumber?: string;
}

const OrgForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const persistPhonNumber = useSelector((state: RootState) => state.user.phonNumber)


  useEffect(() => {

    if (persistPhonNumber) {
      form.setFieldsValue({ phonNumber: persistPhonNumber })
    }

  }, [persistPhonNumber, form])


  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {

    if (values.phonNumber) {
      dispatch(setUser({ phonNumber: values.phonNumber }));
      notifySuccess('کد تایید برای شماره همراه شما ارسال شد');
      setTimeout(() => {
        navigate('/otp');
      }, 2000);
    } else {
      notifyError('شماره همرا ه صجیجی نمیباشد.')
    }
  };




  const phoneRules = [
    { required: true, message: 'لطفا شماره همراه خود را وارد نمایید.' },
    { pattern: RegExp("((0?9)|(\\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\\W?\\d{3}\\W?\\d{4}", 'g'), message: 'شماره همراه وارد شده صحیح نمیباشد.' }
  ];

  return (
    <div className='w-[375px] max-h-[410px] bg-white rounded-lg py-6 px-4 border'>
      <MlHeaderCards
        Element='login'
        titleI='به پنل مدیریت تسک پادرو خوش آمدید'
        titleII='برای ورود، لطفا شماره موبایل خود را وارد کنید'
      />
      <Form
        form={form}
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
      >
        <Form.Item<FieldType>
          style={{ direction: 'rtl' }}
          name="phonNumber"
          rules={phoneRules}
        >
          <Input

            defaultValue={persistPhonNumber ? persistPhonNumber : ''} className='custom-input' size='large' maxLength={11} placeholder="شماره موبایل" />
        </Form.Item>

        <Form.Item style={{ textAlign: 'center', fontSize: '14px', fontWeight: 400, color: '#313235' }}>
          <Button size='large' block type="primary" htmlType="submit" className='mb-4'>
            ارسال کد تایید
          </Button>
          حساب کاربری ندارید؟ <a href="#" className='font-medium text-sm text-[#1043A6]'>ثبت نام</a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default OrgForm;
