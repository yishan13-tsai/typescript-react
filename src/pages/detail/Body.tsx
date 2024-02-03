import { Col, Row, Typography } from 'antd'
import BaseInformation from '@/component/BaseInformation'
import ItemsRoom from '@/component/ItemsRoom'
import { RoomSubItemInfo } from '@/types/room.model';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const barraStyle: React.CSSProperties = {
  borderLeft: '0.3rem solid #BF9D7D',
  paddingLeft: 5,
}
const rules: string[] = [
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
const area: RoomSubItemInfo[] = [
  { title: '市景', isProvide: true },
  { title: '獨立衛浴', isProvide: true },
  { title: '客廳', isProvide: true },
  { title: '書房', isProvide: true },
  { title: '樓層電梯', isProvide: true },
]

export default function Body() {
  const detail = useSelector((state: RootState) => state.room.detail);
  return (
    <>
      <Row gutter={12}>
        <Col span={24}>
          <Typography.Title level={2}> {detail?.name}</Typography.Title>
          <p>{detail?.description}</p>
        </Col>
        <Col span={24}>
          <Typography.Title level={4} style={barraStyle}>
            房型基本資訊
          </Typography.Title>
          <BaseInformation baseInfo={{
            size: detail?.areaInfo || '',
            bed: detail?.bedInfo || '',
            capacity: detail?.maxPeople || 0
          }} />
        </Col>
        <Col span={24}>
          <Typography.Title level={4} style={barraStyle}>
            房間格局
          </Typography.Title>
          <ItemsRoom items={area} />
        </Col>
        <Col span={24}>
          <Typography.Title level={4} style={barraStyle}>
            房內設備
          </Typography.Title>
          <ItemsRoom
            items={detail?.facilityInfo || []}
          />
        </Col>
        <Col span={24}>
          <Typography.Title level={4} style={barraStyle}>
            備品提供
          </Typography.Title>
          <ItemsRoom
            items={detail?.amenityInfo || []}
          />
        </Col>
        <Col span={24}>
          <Typography.Title level={4} style={barraStyle}>
            訂房須知
          </Typography.Title>
          <Items items={rules} />
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
