import React from 'react';
import ReactDOM, { withRouter } from 'react-dom';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom"; 
import { FirebaseContext } from '../Firebase';
import ConstantsList from '../../constants/ConstantsList';
import {
  Affix,
  Modal,
  Form,
  InputNumber,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Card,
  Radio,
  DatePicker,
  TimePicker,
  Typography
} from 'antd';

const { Title } = Typography;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

class RegistrationForm extends React.Component {
  static contextType = FirebaseContext;

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    radioValue0: 1,
    checkboxOther: "",
    checkboxOtherChecked: false
  };

  handleCheckboxOther = e => {
    console.log(e.target.value);
    this.setState({ checkboxOther: e.target.value });
 
    if(e.target.value) {
      this.setState({ checkboxOtherChecked: true });
      console.log("target value set");
    } else {
      console.log("target value error");
    }
  }

  goLoginPage = e =>  {
    this.props.history.push("/");
  }

  goBack = e => {
    this.props.history.goBack();;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        // Prep Data
        var data = {
          name: values.name,
          reference: values.reference,
          age: values.age,
          credits: values.credits,
          health: values.health,
          loc: values.location,
          meditationexperience: values.meditationexperience,
          olsexperience: values.olsexperience,
          teacher: values.teacher,
          start: values.start.format()
        }
 
        // Create user account
        // Ensure user agreed with ToS
        if(values.agreement1 && values.agreement2) {
          this.firebase.createUser(values.email, values.password)
          .then((promRes) => {
            console.log(promRes.user.uid);
            var user = promRes.user;
            // Send email verification and add user data to database
            return Promise.all([
              this.firebase.sendEmailVerification(),
              this.firebase.createUserFireStore(data, ConstantsList.OLSS_COL, user.uid),
              this.firebase.addToUserList(user.uid, { type: ConstantsList.OLSS_COL })
            ]);
          })
          .then(() => {
              Modal.success({ title: "Account Created!", content: "Your account has been successfully created. Please check your email to verify your account" });
              this.props.history.push("/");
              this.firebase.auth2.signOut();
          })
          .catch(error => {
            Modal.error({ title: "Issue Creating Account", content: error.message });
            console.log(error); 
          });
        }
      } else {
        console.log('Account creation error');
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  setDate = e => {
    console.log(e);
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  validateRadio = (rule, value, callback) => {
    const form = this.props.form;
   
    console.log(rule);
    console.log(value);
  }

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  componentDidMount() {
    this.firebase = this.context;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div style={{display: "table", position: "absolute", height: "100%", width: "100%"}}>
        <Affix offsetTop={0} style={{position: 'absolute', top: 20, left: 20}}>
          <Button shape="circle" icon="left" onClick={this.goBack} />
        </Affix>
        <div style={{marginLeft: "auto", marginRight: "auto", marginTop: "50px", marginBottom: "10px", textAlign: "center"}}>
          <Card style={{display:"inline-block", textAlign: "initial"}}>
            <Form onSubmit={this.handleSubmit}>
              <div style={{"textAlign": "center"}}>
                <Title level={3}>OLS Student Assessment Application</Title>
              </div>
              <br />
              <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Password" hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    {
                      validator: this.validateToNextPassword,
                    },
                  ],
                })(<Input.Password />)}
              </Form.Item>
              <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator('confirm', {
                  rules: [
                    {
                      required: true,
                      message: 'Please confirm your passcode!',
                    },
                    {
                      validator: this.compareToFirstPassword,
                    },
                  ],
                })(<Input.Password onBlur={this.handleConfirmBlur} />)}
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Name&nbsp;
                    <Tooltip title="First and Last Name?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
                })(<Input />)}
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    onelightsystem OLS experience&nbsp;
                  </span>
                }
              >
                {getFieldDecorator('olsexperience', {
                  rules: [{ required: true, message: 'Please input your experience!', whitespace: true }]
                  })(
                    <Radio.Group onChange={this.onChange} value={this.state.radioValue0}>
                      <Radio style={radioStyle} value={"New"}>
                        New 
                      </Radio>
                      <Radio style={radioStyle} value={"PAST Initiated"}>
                        PAST Initiated
                      </Radio>
                    </Radio.Group>
                  )
                }
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    How did you find out about OLS&nbsp;
                    <Tooltip title="OLS promoter - referral ?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('reference', {
                  rules: [{ required: true, message: 'Please input a value!', whitespace: true }],
                })(<Input />)}
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    OLS eae | inuo &nbsp;
                    <Tooltip title=" Select your OLS official:  OLS eae (teacher) OLS inuo (instructor) Each has it is own exchange measurement evaluation protocols to determinate proper OLS service fees energy exchange. when becoming OLS student can change to different OLS official by requesting new OLS intro&initi ">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('teacher', {
                  rules: [{ required: true, message: 'Please select OLS official!', whitespace: true }],
                  })(
                    <Radio.Group onChange={this.onChange} value={this.state.radioValue0}>
                      <Radio style={radioStyle} value={"OLS aste. eae | Nazar Asvitlo  CA USA"}>
                        OLS aste. eae | Nazar Asvitlo  CA USA
                      </Radio>
                      <Radio style={radioStyle} value={"OLS inuo | Rei-Wen Ho  教员 CA USA"}>
                        OLS inuo | Rei-Wen Ho  教员 CA USA
                      </Radio>
                    </Radio.Group>
                  )
                }
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Your LOCATION (city/town, state, country)&nbsp;
                    <Tooltip title="Determines OLS service value fee* CA$190, Bay Area CA $240 (USA average $160); the rest of countries (Quality of Life GDP value assessment)">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('location', {
                  rules: [{ required: true, message: 'Please input a value!', whitespace: true }],
                })(<Input />)}
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Your Age&nbsp;
                    <Tooltip title="Ages 6-12 required a parent, 13-16 (category II), 17-21 (III), 22-27 (4), 28-32 (5), 33-39 (6), 40-44 (7), 45-49 (8), 50-55 (9), 56-62 (10), 63-69 (11), 70-77(12), 78-85 (13), 86 up (14) " >
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('age', {
                  rules: [{ required: true, message: 'Please input a number!', whitespace: true, type: 'number' }],
                })(<InputNumber />)}
              </Form.Item>
              <Form.Item
                label={
                  <span>
                     Any Health concerns ?&nbsp;
                  </span>
                }
              >
                {getFieldDecorator('health', {
                  rules: [{ required: true, message: 'Please input a value!', whitespace: true }],
                })(<Input />)}
              </Form.Item>

              <Form.Item
                label={
                  <span>
                    Meditation Experience&nbsp;
                    <Tooltip title=" what you been practicing, how long and be more specific ">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('meditationexperience', {
                  rules: [{ required: true, message: 'Please input a value!', whitespace: true }],
                })(<Input />)}
              </Form.Item>
              
              <Form.Item
                label={
                  <span>
                    How soon can you be ready for OLS intro 30 min. ?&nbsp;
                  </span>
                }
              >
                {getFieldDecorator('start', {
                  rules: [{ required: true, message: 'Please input a value!', whitespace: true, type: 'object' }],
                })(
                    <DatePicker onChange={this.setDate} />
                  )
                }
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    What is a convenient time &nbsp;
                    <Tooltip title="Please provide approximate time you prefer, the exact time scheduling will be After assessment ready , pre-payment 50% than is scheduling for OLS intro" >
                      <Icon type="question-circle-o" />
                    </Tooltip>&nbsp;

                  </span>
                }
              >
                {getFieldDecorator('start', {
                  rules: [{ required: true, message: 'Please input a value!', whitespace: true, type: 'object' }],
                })(
                    <TimePicker use12Hours format="h:mm a"/>
                  )
                }
              </Form.Item>
              <Form.Item 
                label={
                  <span>
                    Application Validity&nbsp;
                    <Tooltip title="The OLS service fees based on assessment current provided Applicant up to date data (valid 9days after to re-evaluate fees will increse 10%) Expect official @mail (intro@ols-med.net) you will receive Assessed OLS servcie Fees to include 50% pre-payment to Scheduling OLS INTRO. check your profile page to track your progess ">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('agreement1', {
                  valuePropName: 'checked', rules: [{ required: true, message: 'Please check the box'}]
                })(
                  <Checkbox>
                    All the information submitted in this form is true and correct
                  </Checkbox>
                )}
              </Form.Item>
              <Form.Item 
                label={
                  <span>
                    OLS private privacy disclosure Agreement &nbsp;
                  </span>
                }
              >
                {getFieldDecorator('agreement2', {
                  valuePropName: 'checked', rules: [{ required: true, message: 'Please check the box'}]
                })(
                  <Checkbox>
                    I have read and agreed to the <a href="https://www.ols-med.net/ols-private-privacy-disclosure-updates-06-2019/ols-student-statute">OLS student terms of the services </a>
                  </Checkbox>
                )}
              </Form.Item>
              <Form.Item label={
                  <span>
                    Evaluation credits?&nbsp;
                  </span>
                }
              >
                {getFieldDecorator('credits', {
                  rules: [{ type: "array" }], initialValue: [""]}
                )(
                  <Checkbox.Group
                    onChange={(values) => { console.log(values) }} 
                  >
                    <div>
                      <Checkbox value="10 Google Review">(10)Had prior OLS experience?! leave a review on <a href="https://goo.gl/7tsW6L">google</a></Checkbox>
                        <br />
                      <Checkbox value="10 Lessons.com">(10)Had prior OLS experience?! leave a review on our <a href="https://goo.gl/dhbvmX">lessons</a></Checkbox>
                        <br />
                      <Checkbox value="5 Youtube">(5)Subscribed on <a href="https://www.youtube.com/c/ONELIGHTSYSTEMOLSMeditation"> Youtube</a></Checkbox>
                        <br />
                      <Checkbox value="5 CrunchBase">(5)Followed us on <a href="https://www.crunchbase.com/organization/onelightsystem-ols">CrunchBase</a></Checkbox>
                        <br />
                      <Checkbox value="5 Instagram">(5)Followed us on <a href="https://www.instagram.com/onelightsystem_ols/">Instagram</a></Checkbox>
                        <br />
                      <Checkbox value="5 LinkedIn">(5)Followed us on <a href="https://www.linkedin.com/company/one-light-system/">LinkedIn</a></Checkbox>
                        <br />
                      <Checkbox value="5 Owler">(5)Followed us on <a href="https://www.owler.com/company/ols-med">Owler and Weight</a></Checkbox>
                        <br />
                      <Checkbox value="Udemy">Took our class on <a href="https://www.udemy.com/onelightsystem-olsm/?instructorPreviewMode=guest">Udemy</a></Checkbox>
                        <br />
                      <Checkbox value="5 Facebook">(5)Liked and share our <a href="https://www.facebook.com/onelightsystem/">Facebook</a> page</Checkbox>
                        <br />
                      <Checkbox value="5 OLS Subscription">(5)Took our OLS subscription <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbLCi3OIfYXxriI1ddYm0ekzfFYpqhpExnheEyNUY2FfnEqw/viewform">survey</a></Checkbox>
                        <br />
                      <Checkbox value="Offter something else">I can offer something else</Checkbox>
                        <br />
                      <Checkbox value="Pay with crypto">(1) will apply valid crypto currencies to pay for OLS service fees</Checkbox>
                        <br />
                      <Checkbox value="Create OLS Video">(10)I will create video on the OLS experience</Checkbox>
                        <br />
                      <Checkbox checked={ true } value={ "Other " + this.state.checkboxOther }>Other: </Checkbox><Input style={{ width: 100, marginLeft: 10 }} onChange={ this.handleCheckboxOther }/>
                    </div>
                  </Checkbox.Group>
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                Apply for OLS student
                </Button>
              </Form.Item>
              
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
export default WrappedRegistrationForm;
