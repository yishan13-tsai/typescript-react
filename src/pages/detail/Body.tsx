import { Col, Row, Typography } from 'antd'
import BaseInformation from '@/component/BaseInformation'
import ItemsRoom from '@/component/ItemsRoom'

const barraStyle: React.CSSProperties = {
  borderLeft: '0.3rem solid #BF9D7D',
  paddingLeft: 5,
}
const items: string[] = [
  '入住時間為下午3點，退房時間為上午12點。',
  '如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。',
  '請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。',
  '若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。',
  '請愛惜我們的房間與公共空間，並保持整潔。',
  '如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。',
  '我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。',
  '請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。',
  '我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。',
  '為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。',
];
export default function Body() {


  return (
    <>
      <Row gutter={12}>
        <Col span={24}>
          <Typography.Title level={2}>尊爵雙人房</Typography.Title>
          <p>
            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
          </p>
        </Col>
        <Col span={24}>
          <Typography.Title level={4} style={barraStyle}>
            房型基本資訊
          </Typography.Title>
          <BaseInformation />
        </Col>
        <Col span={24}>
          <Typography.Title level={4} style={barraStyle}>
            房間格局
          </Typography.Title>
          <ItemsRoom
            items={['市景', '獨立衛浴', '客廳', '書房', '樓層電梯']}
          />
        </Col>
        <Col span={24}>
          <Typography.Title level={4} style={barraStyle}>
            房內設備
          </Typography.Title>
          <ItemsRoom
            items={[
              '平面電視',
              '吹風機',
              '冰箱',
              '熱水壺',
              '檯燈',
              '衣櫃',
              '除濕機',
              '浴缸',
              '書桌',
              '音響',
            ]}
          />
        </Col>
        <Col span={24}>
          <Typography.Title level={4} style={barraStyle}>
            備品提供
          </Typography.Title>
          <ItemsRoom
            items={[
              '衛生紙',
              '拖鞋',
              '沐浴用品',
              '清潔用品',
              '刮鬍刀',
              '吊衣架',
              '刷牙用品',
              '罐裝水',
              '梳子',
            ]}
          />
        </Col>
        <Col span={24}>
          <Typography.Title level={4} style={barraStyle}>
            訂房須知
          </Typography.Title>
          <Items items={items} />
        </Col>
      </Row>
    </>
  );
}

function Items({ items }: { items: string[] }) {
  return (
    <ul className="list-decimal p-2">
      {items.map((item, index) => (
        <li key={index} className="ml-5">
          {item}
        </li>
      ))}
    </ul>
  );
}
