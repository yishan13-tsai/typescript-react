import { Col, Row } from 'antd'
import Body from '@/pages/detail/Body'
import Head from '@/pages/detail/Head'
import BookRoom from '@/pages/detail/BookRoom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from '@/utils/axios'
import { RoomType } from '@/types/room.model'
import useSWR from 'swr'
import { useDispatch } from 'react-redux'
import { getRoom } from '@/slice/roomSlice'

const axiosGet = async (url: string) => {
  return axios.get(url).then((response) => {
    return response
  })
}
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [canFetch, setCanFetch] = useState(false)
  const { data, error } = useSWR(
    canFetch ? `/rooms/${id}` : null,
    axiosGet,
  )
  useEffect(() => {
    if (id) setCanFetch(true)
  }, [id])

  useEffect(() => {
    if (error) console.error(error)
  }, [error])

  useEffect(() => {
    if (!data) return
    dispatch(getRoom(data.result));
  }, [data])
  return (
    <>
      <div className="mb-20">
        <Head />
        <div className="w-4/6 mx-auto">
          <Row gutter={[16, 16]}>
            <Col span={12} className="pl-20">
              <Body />
            </Col>
            <Col span={12}>
              <BookRoom />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
export default Detail;
