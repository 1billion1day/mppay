import {
    AutoCenter,
    Avatar,
    Button,
    Card,
    Footer,
    Grid,
    Image,
    List,
    NavBar,
    SafeArea,
    Space,
    TabBar, Toast
} from "antd-mobile";
import './Home.css'
import {
    AudioOutline, CheckCircleFill, ExclamationCircleOutline,
    PictureOutline,
    QuestionCircleOutline,
} from "antd-mobile-icons";

export const Home = () => {
    const member = [
        {
            score: '300 积分',
            cost: '39',
            price: '每积分仅 0.13 元'
        },
        {
            score: '800 积分',
            cost: '69',
            price: '每积分仅 0.086 元'
        },
        {
            score: '2000 积分',
            cost: '129',
            price: '每积分仅 0.065 元'
        },
        {
            score: '月度 VIP 会员',
            cost: '60',
            price: '1个月内无限次使用'
        },
        {
            score: '季度 VIP 会员',
            cost: '120',
            price: '3个月内无限次使用'
        },
    ];

    let chooseMemIndex = -1;
    const chooseMember = ({index}: { index: number }) => () => {
        console.log(index)
        for (let i = 0; i < member.length; i++) {
            const card = document.getElementById('memCard' + i);
            if (card) {
                card.style.borderColor = 'lightblue';
            }
        }
        document.getElementById('memCard' + index)?.style.setProperty('border-color', 'red');
        chooseMemIndex = index;
    }
    const submit = () => {
        if (chooseMemIndex === -1) {
            Toast.show({
                icon: <ExclamationCircleOutline />,
                content: '请选择会员',
            })
        } else {
            alert('提交成功')
        }
    }
    return (
        <div style={{height: '100%'}}>
            <SafeArea position='top'/>
            <NavBar backArrow={false} style={{
                backgroundColor: '#fff',
            }}>我的AI助手</NavBar>
            <div style={{
                backgroundColor: 'lightblue',
                padding: '5vw'
            }}>
                <AutoCenter>
                    <Avatar
                        src={''}
                        fit={"cover"}
                        style={{borderRadius: "16vw", '--size': '32vw'}}
                    />
                </AutoCenter>
                <AutoCenter>
                    <h3 style={{color: "white"}}>剩余积分：5</h3>
                </AutoCenter>
                <AutoCenter>
                    <Space style={{color: 'grey'}}>
                        <span>提问:1积分/次;</span>
                        <span>语音:2积分/次;</span>
                        <span>绘画:2积分/张;</span>
                    </Space>
                </AutoCenter>
            </div>
            <div className={'subtitle'}>
                <span>会员权益</span>
            </div>
            <div className={'content-area'}>
                <List>
                    <List.Item prefix={<QuestionCircleOutline/>}
                               description={"可以随时提问问题"}
                               extra={<CheckCircleFill/>}
                    >
                        无限制的提问次数
                    </List.Item>
                    <List.Item prefix={<AudioOutline/>}
                               description={"可以随时的语音回复问题"}
                               extra={<CheckCircleFill/>}
                    >
                        无限制的语音回复次数
                    </List.Item>
                    <List.Item prefix={<PictureOutline/>}
                               description={"可以随时使用绘画功能"}
                               extra={<CheckCircleFill/>}
                    >
                        无限制的绘画权限
                    </List.Item>
                </List>
            </div>
            <div className={'subtitle'}>
                <span>会员选择</span>
            </div>
            <div className={'content-area'}>
                <Grid columns={2} gap={'5vw'}>
                    {member.map((item, index) => (
                        <div className={'member-card'} key={index} id={"memCard" + index}
                             onClick={chooseMember({index})}>
                            <AutoCenter>
                                <div style={{fontSize: '5vw', color: 'lightblue', fontWeight: 'bold'}}>
                                    {item.score}
                                </div>
                            </AutoCenter>
                            <AutoCenter>
                                <div style={{fontSize: '5vw', color: 'red', fontWeight: 'bold', margin: '0.2vw 0'}}>
                                    ¥ {item.cost}
                                </div>
                            </AutoCenter>
                            <AutoCenter>
                                <div style={{fontWeight: 'bold', fontSize: '3vw'}}>
                                    {item.price}
                                </div>
                            </AutoCenter>
                        </div>
                    ))}
                </Grid>
                <AutoCenter>
                    <div
                        style={{paddingTop: '3vw', color: 'grey', fontSize: '2.5vw'}}>会员服务为虚拟商品，支付成功后不支持退款
                    </div>
                </AutoCenter>
            </div>

            <div className={'foot'}>
                <Button block color='primary' size='large' onClick={submit}>
                    立即开通
                </Button>
            </div>
            <SafeArea position='bottom'/>
        </div>
    )
}